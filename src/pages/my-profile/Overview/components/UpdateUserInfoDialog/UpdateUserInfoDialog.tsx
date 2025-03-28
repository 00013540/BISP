import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Grid2, Button, Snackbar, Alert } from '@mui/material';

import { getFormikError } from '@/utils';
import { CommonDialog } from '@/components/dialogs';
import {
    useDeleteImage,
    useUpdateImage,
    useUpdateUser,
} from '@/dataAccess/hooks';
import { CustomTextField, CustomImageUploader } from '@/components/common';

import { UpdateUserInfoDialogProps } from './UpdateUserInfoDialog.types.ts';
import {
    defaultValues,
    getUpdateUserInfoDialogSchema,
} from './UpdateUserInfoDialog.schema.ts';

const UpdateUserInfoDialog = ({
    isOpen,
    setIsOpen,
    updateData,
}: UpdateUserInfoDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<null | string | File>(
        null
    );

    const { isPending: isPendingDeleteImage, mutate: mutateDeleteImage } =
        useDeleteImage();
    const { isPending: isPendingImage, mutate: mutateImage } = useUpdateImage();
    const { isPending: isPendingUser, mutate: mutateUser } = useUpdateUser();

    const handleClose = () => {
        setIsOpen(false);
        setUploadedImage(null);
        formik.resetForm();
    };

    const handleFileChange = (value: string) => {
        if (value) formik.setFieldValue('image', 'Uploaded');
        else formik.setFieldValue('image', '');
    };

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getUpdateUserInfoDialogSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            if (!uploadedImage) {
                if (updateData.image && updateData.imageStoragePath) {
                    mutateDeleteImage(updateData.imageStoragePath, {
                        onSuccess: () => {
                            mutateUser(
                                {
                                    uid: updateData.uid,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    phoneNumber: values.phoneNumber,
                                    image: '',
                                    imageStoragePath: '',
                                },
                                {
                                    onSuccess: () => {
                                        setSubmitting(false);
                                        handleClose();
                                        setOpenSuccessAlert(true);
                                    },
                                    onError: () => {
                                        setSubmitting(false);
                                    },
                                }
                            );
                        },
                        onError: () => {
                            setSubmitting(false);
                        },
                    });
                } else {
                    mutateUser(
                        {
                            uid: updateData.uid,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            phoneNumber: values.phoneNumber,
                            image: '',
                            imageStoragePath: '',
                        },
                        {
                            onSuccess: () => {
                                setSubmitting(false);
                                handleClose();
                                setOpenSuccessAlert(true);
                            },
                            onError: () => {
                                setSubmitting(false);
                            },
                        }
                    );
                }
            } else if (typeof uploadedImage === 'string') {
                mutateUser(
                    {
                        uid: updateData.uid,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        phoneNumber: values.phoneNumber,
                        image: updateData.image || '',
                        imageStoragePath: updateData.imageStoragePath || '',
                    },
                    {
                        onSuccess: () => {
                            setSubmitting(false);
                            handleClose();
                            setOpenSuccessAlert(true);
                        },
                        onError: () => {
                            setSubmitting(false);
                        },
                    }
                );
            } else {
                mutateImage(
                    {
                        image: uploadedImage as File,
                        imagePath: updateData.imageStoragePath,
                    },
                    {
                        onSuccess: ({ url, path }) => {
                            mutateUser(
                                {
                                    uid: updateData.uid,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    phoneNumber: values.phoneNumber,
                                    image: url,
                                    imageStoragePath: path,
                                },
                                {
                                    onSuccess: () => {
                                        setSubmitting(false);
                                        handleClose();
                                        setOpenSuccessAlert(true);
                                    },
                                    onError: () => {
                                        setSubmitting(false);
                                    },
                                }
                            );
                        },
                        onError: () => {
                            setSubmitting(false);
                        },
                    }
                );
            }
        },
    });

    const isSubmittingForm =
        isPendingImage ||
        isPendingDeleteImage ||
        isPendingUser ||
        formik.isSubmitting;

    useEffect(() => {
        if (isOpen) {
            if (updateData.image) setUploadedImage(updateData.image);
            if (updateData.firstName)
                formik.setFieldValue('firstName', updateData.firstName);
            if (updateData.lastName)
                formik.setFieldValue('lastName', updateData.lastName);
            if (updateData.image)
                formik.setFieldValue('image', updateData.image);
            if (updateData.phoneNumber)
                formik.setFieldValue('phoneNumber', updateData.phoneNumber);
        }
    }, [isOpen, updateData]);

    return (
        <>
            <CommonDialog
                isHidden={false}
                open={isOpen}
                onClose={handleClose}
                isSubmitting={isSubmittingForm}
                maxWidth={500}
                title="Update User Info"
            >
                <form onSubmit={formik.handleSubmit}>
                    <CustomTextField
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        label="First name"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'firstName')}
                    />
                    <CustomTextField
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        label="Last name"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'lastName')}
                    />
                    <CustomTextField
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        label="Phone number"
                        placeholder="+998xxxxxxxxx"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'phoneNumber')}
                    />
                    <CustomImageUploader
                        label="Photo of user"
                        value={uploadedImage}
                        setValue={setUploadedImage}
                        setFormikValue={handleFileChange}
                        error={!!formik.errors.image && formik.touched.image}
                        helperText={formik.errors.image}
                        mb={4}
                    />
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                type="button"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Button
                                fullWidth
                                loading={isSubmittingForm}
                                variant="contained"
                                type="submit"
                            >
                                Update
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
            </CommonDialog>
            <Snackbar
                open={openSuccessAlert}
                autoHideDuration={4000}
                onClose={() => setOpenSuccessAlert(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setOpenSuccessAlert(false)}
                    severity="success"
                    variant="filled"
                >
                    User information updated successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default UpdateUserInfoDialog;

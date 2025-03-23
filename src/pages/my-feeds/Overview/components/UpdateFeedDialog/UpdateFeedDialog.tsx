import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Grid2, Button, Snackbar, Alert } from '@mui/material';

import { getFormikError } from '@/utils';
import { CommonDialog } from '@/components/dialogs';
import {
    CustomTextField,
    CustomSelect,
    CustomImageUploader,
} from '@/components/common';
import {
    useGetCategories,
    useUpdateImage,
    useUpdateItem,
} from '@/dataAccess/hooks';

import { UpdateFeedDialogProps } from './UpdateFeedDialog.types.ts';
import {
    defaultValues,
    getUpdateFeedDialogSchema,
} from './UpdateFeedDialog.schema.ts';

const UpdateFeedDialog = ({
    isOpen,
    setIsOpen,
    updateData,
}: UpdateFeedDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<null | string | File>(
        null
    );

    const { isPending: isPendingImage, mutate: mutateImage } = useUpdateImage();
    const { isPending: isPendingItem, mutate: mutateItem } = useUpdateItem();

    const { data } = useGetCategories();
    const categories =
        data?.map((category) => ({
            text: category.name,
            value: category.name,
        })) || [];

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
        validationSchema: getUpdateFeedDialogSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            if (typeof uploadedImage === 'string') {
                mutateItem(
                    {
                        uid: updateData.uid,
                        title: values.title,
                        description: values.description,
                        address: values.address,
                        image: updateData.image,
                        imageStoragePath: updateData.imageStoragePath,
                        category: values.category,
                        ownerUid: updateData.ownerUid,
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
                            mutateItem(
                                {
                                    uid: updateData.uid,
                                    title: values.title,
                                    description: values.description,
                                    address: values.address,
                                    image: url,
                                    imageStoragePath: path,
                                    category: values.category,
                                    ownerUid: updateData.uid,
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
        isPendingImage || isPendingItem || formik.isSubmitting;

    useEffect(() => {
        if (isOpen) {
            if (updateData.image) setUploadedImage(updateData.image);
            if (updateData.title)
                formik.setFieldValue('title', updateData.title);
            if (updateData.description)
                formik.setFieldValue('description', updateData.description);
            if (updateData.image)
                formik.setFieldValue('image', updateData.image);
            if (updateData.address)
                formik.setFieldValue('address', updateData.address);
            if (updateData.category)
                formik.setFieldValue('category', updateData.category);
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
                title="Create a New Feed"
            >
                <form onSubmit={formik.handleSubmit}>
                    <CustomTextField
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        label="Title"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'title')}
                    />
                    <CustomTextField
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        label="Description"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'description')}
                    />
                    <CustomTextField
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        label="Address"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'address')}
                    />
                    <CustomSelect
                        name="category"
                        label="Category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        items={categories}
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'category')}
                    />
                    <CustomImageUploader
                        label="Upload image of item"
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
                    This feed updated successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default UpdateFeedDialog;

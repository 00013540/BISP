import { useFormik } from 'formik';
import { useState } from 'react';
import { Grid2, Button, Snackbar, Alert } from '@mui/material';

import { getFormikError } from '@/utils';
import { CommonDialog } from '@/components/dialogs';
import { useUser } from '@/context/user-context';
import {
    CustomTextField,
    CustomSelect,
    CustomImageUploader,
} from '@/components/common';
import {
    useGetCategories,
    useCreateItem,
    useCreateImage,
} from '@/dataAccess/hooks';

import { CreateFeedDialogProps } from './CreateFeedDialog.types.ts';
import {
    defaultValues,
    getCreateFeedDialogSchema,
} from './CreateFeedDialog.schema.ts';

const CreateFeedDialog = ({ isOpen, setIsOpen }: CreateFeedDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<null | string | File>(
        null
    );

    const { currentUser } = useUser();
    const { isPending: isPendingImage, mutate: mutateImage } = useCreateImage();
    const { isPending: isPendingItem, mutate: mutateItem } = useCreateItem();

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
        validationSchema: getCreateFeedDialogSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            mutateImage(uploadedImage as File, {
                onSuccess: ({ url, path }) => {
                    mutateItem(
                        {
                            title: values.title,
                            description: values.description,
                            address: values.address,
                            image: url,
                            imageStoragePath: path,
                            category: values.category,
                            ownerUid: currentUser?.uid || '',
                            ownerPhone: currentUser?.phoneNumber || '',
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
        },
    });

    const isSubmittingForm =
        isPendingImage || isPendingItem || formik.isSubmitting;

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
                                Create
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
                    A new feed created successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default CreateFeedDialog;

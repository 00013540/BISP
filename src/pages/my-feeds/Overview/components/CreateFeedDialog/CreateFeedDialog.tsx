import { Grid2, Button } from '@mui/material';
import { useFormik } from 'formik';

import { getFormikError } from '@/utils';
import { CommonDialog } from '@/components/dialogs';
import {
    CustomTextField,
    CustomSelect,
    CustomImageUploader,
} from '@/components/common';

import { CreateFeedDialogProps } from './CreateFeedDialog.types.ts';
import {
    defaultValues,
    getCreateFeedDialogSchema,
} from './CreateFeedDialog.schema.ts';
import { useGetCategories } from '@/dataAccess/hooks';
import { useState } from 'react';

const CreateFeedDialog = ({ isOpen, setIsOpen }: CreateFeedDialogProps) => {
    const [uploadedImage, setUploadedImage] = useState<null | string | File>(
        null
    );

    const { data } = useGetCategories();
    const categories =
        data?.map((category) => ({
            text: category.name,
            value: category.name,
        })) || [];

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getCreateFeedDialogSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            try {
                console.log(values);
            } catch (err: unknown) {
                console.error(err);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleClose = () => {
        setIsOpen(false);
        setUploadedImage(null);
        formik.resetForm();
    };

    const handleFileChange = (value: string) => {
        if (value) formik.setFieldValue('photo', 'Uploaded');
        else formik.setFieldValue('photo', '');
    };

    return (
        <CommonDialog
            isHidden={false}
            open={isOpen}
            onClose={handleClose}
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
                    label="Upload photo of item"
                    value={uploadedImage}
                    setValue={setUploadedImage}
                    setFormikValue={handleFileChange}
                    error={!!formik.errors.photo && formik.touched.photo}
                    helperText={formik.errors.photo}
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
                        <Button fullWidth variant="contained" type="submit">
                            Create
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </CommonDialog>
    );
};

export default CreateFeedDialog;

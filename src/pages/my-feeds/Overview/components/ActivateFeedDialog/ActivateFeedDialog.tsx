import { useFormik } from 'formik';
import { useState } from 'react';
import { Grid2, Button, Snackbar, Alert } from '@mui/material';

import { getFormikError } from '@/utils';
import { CommonDialog } from '@/components/dialogs';
import { useActivateItem } from '@/dataAccess/hooks';
import { CustomSelect } from '@/components/common';
import { ItemType, ItemDuration } from '@/dataAccess/types';

const ITEM_TYPES = [
    {
        text: 'First bid win',
        value: ItemType.FIRST_BID,
    },
    {
        text: 'Auction',
        value: ItemType.AUCTION,
    },
];

const ITEM_DURATIONS = [
    {
        text: '1',
        value: ItemDuration.ONE,
    },
    {
        text: '3',
        value: ItemDuration.THREE,
    },
    {
        text: '5',
        value: ItemDuration.FIVE,
    },
];

import { ActivateFeedDialogProps } from './ActivateFeedDialog.types.ts';
import {
    defaultValues,
    getActivateFeedDialogSchema,
} from './ActivateFeedDialog.schema.ts';

const ActivateFeedDialog = ({
    isOpen,
    setIsOpen,
    activateData,
}: ActivateFeedDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

    const { isPending, mutate } = useActivateItem();

    const handleClose = () => {
        setIsOpen(false);
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getActivateFeedDialogSchema(),

        onSubmit: async (values) => {
            mutate(
                {
                    uid: activateData.uid,
                    type: values.type,
                    duration: values.duration,
                },
                {
                    onSuccess: () => {
                        handleClose();
                        setOpenSuccessAlert(true);
                    },
                }
            );
        },
    });

    return (
        <>
            <CommonDialog
                isHidden={false}
                open={isOpen}
                onClose={handleClose}
                isSubmitting={isPending}
                maxWidth={500}
                title="Activate Feed"
            >
                <form onSubmit={formik.handleSubmit}>
                    <CustomSelect
                        name="type"
                        label="Giveaway type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        items={ITEM_TYPES}
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'type')}
                    />
                    {formik.values.type === ItemType.AUCTION && (
                        <CustomSelect
                            name="duration"
                            label="Auction Duration"
                            value={formik.values.duration.toString()}
                            onChange={formik.handleChange}
                            items={ITEM_DURATIONS}
                            sx={{ mb: 4 }}
                            {...getFormikError(formik, 'duration')}
                        />
                    )}
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
                                loading={isPending}
                                variant="contained"
                                type="submit"
                            >
                                Activate
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
                    Feed was activated successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default ActivateFeedDialog;

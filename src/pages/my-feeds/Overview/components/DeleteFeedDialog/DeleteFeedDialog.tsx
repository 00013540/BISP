import {
    Alert,
    Box,
    Button,
    Grid2,
    Snackbar,
    Typography,
    useTheme,
} from '@mui/material';

import { TimerThinSVG } from '@/components/icons';
import { CommonDialog } from '@/components/dialogs';
import { useImageDelete, useDeleteItem } from '@/dataAccess/hooks';

import { DeleteFeedDialogProps } from './DeleteFeedDialog.types.ts';
import { useState } from 'react';

const DeleteFeedDialog = ({
    isOpen,
    setIsOpen,
    deleteData,
}: DeleteFeedDialogProps) => {
    const theme = useTheme();
    const { isPending: isImageDeletePending, mutate: mutateImageDelete } =
        useImageDelete();
    const { isPending: isItemDeletePending, mutate: mutateItemDelete } =
        useDeleteItem();

    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDelete = () => {
        mutateImageDelete(deleteData.imageStoragePath, {
            onSuccess: () => {
                mutateItemDelete(deleteData.uid, {
                    onSuccess: () => {
                        handleClose();
                        setOpenSuccessAlert(true);
                    },
                });
            },
        });
    };

    const isPending = isImageDeletePending || isItemDeletePending;

    return (
        <>
            <CommonDialog
                isHidden={false}
                open={isOpen}
                onClose={handleClose}
                isSubmitting={isPending}
                maxWidth={500}
                title="Delete Feed"
            >
                <Box textAlign="center">
                    <TimerThinSVG
                        fillColor={theme.palette.gray['6']}
                        height="3.75rem"
                        width="3.75rem"
                        style={{ marginBottom: '1.875rem' }}
                    />
                    <Typography variant="h5" color="text.primary" mb={2}>
                        Delete This Feed
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={7.5}>
                        Are you sure you want to delete this feed? Once deleted,
                        this action cannot be undone, and all associated content
                        will be permanently removed.
                    </Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                type="button"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                fullWidth
                                color="error"
                                variant="outlined"
                                type="button"
                                loading={isPending}
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        </Grid2>
                    </Grid2>
                </Box>
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
                    Successfully deleted feed!
                </Alert>
            </Snackbar>
        </>
    );
};

export default DeleteFeedDialog;

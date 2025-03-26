import { useState } from 'react';
import { useParams } from 'react-router';
import {
    Alert,
    Box,
    Button,
    Grid2,
    Snackbar,
    Typography,
    useTheme,
} from '@mui/material';

import { useUser } from '@/context/user-context';
import { ItemData } from '@/dataAccess/types';
import { CommonDialog } from '@/components/dialogs';
import { TimerThinSVG } from '@/components/icons';
import { useGetItem, useMakeBidTransaction } from '@/dataAccess/hooks';

import { MakeBidTransactionDialogProps } from './MakeBidTransactionDialog.types.ts';

const MakeBidTransactionDialog = ({
    isOpen,
    setIsOpen,
}: MakeBidTransactionDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

    const theme = useTheme();
    const { feedAddress } = useParams();
    const {
        data: rawData,
        isFetching,
        refetch: refetchItem,
    } = useGetItem({
        uid: feedAddress || '',
    });
    const {
        currentUser,
        loading: isUserLoading,
        refetch: refetchUser,
    } = useUser();
    const { isPending, mutate } = useMakeBidTransaction();
    const data = rawData || ({} as ItemData);

    const currentBid = data.participants.reduce((acc, cur) => {
        const bidAmount = cur.placedBid;
        if (acc > bidAmount) return acc;
        return bidAmount;
    }, 0);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleMakeBidTransaction = () => {
        if (!currentUser?.uid) return;

        mutate(
            {
                refToItem: data.uid,
                fromUser: currentUser.uid,
                toUser: data.ownerUid,
                amount: currentBid,
            },
            {
                onSuccess: async () => {
                    await refetchItem();
                    refetchUser();
                    handleClose();
                    setOpenSuccessAlert(true);
                },
            }
        );
    };

    const isLoading = isFetching || isPending || isUserLoading;

    return (
        <>
            <CommonDialog
                isHidden={false}
                open={isOpen}
                onClose={handleClose}
                isSubmitting={isPending}
                maxWidth={500}
                title="Make bid transaction"
            >
                <Box textAlign="center">
                    <TimerThinSVG
                        fillColor={theme.palette.gray['6']}
                        height="3.75rem"
                        width="3.75rem"
                        style={{ marginBottom: '1.875rem' }}
                    />
                    <Typography variant="h5" color="text.primary" mb={2}>
                        Make bid transaction
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={7.5}>
                        Are you sure you want to make bid transaction in the
                        amount of <b>{currentBid}</b>? Once made, this action
                        cannot be undone.
                    </Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                type="button"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                fullWidth
                                type="button"
                                loading={isLoading}
                                onClick={handleMakeBidTransaction}
                            >
                                Make bid transaction: {currentBid}
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
                    Bid transaction made successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default MakeBidTransactionDialog;

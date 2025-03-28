import { useState } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router';
import { Alert, Button, Grid2, Snackbar } from '@mui/material';

import { getFormikError } from '@/utils';
import { useUser } from '@/context/user-context';
import { ItemData, ItemType } from '@/dataAccess/types';
import { useAddBid, useAddToMyBids, useGetItem } from '@/dataAccess/hooks';
import { CommonDialog } from '@/components/dialogs';
import { CustomTextField } from '@/components/common';

import { PlaceBidDialogProps } from './PlaceBidDialog.types.ts';
import {
    defaultValues,
    getPlaceBidDialogSchema,
} from './PlaceBidDialog.schema.ts';

const PlaceBidDialog = ({ isOpen, setIsOpen }: PlaceBidDialogProps) => {
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

    const { feedAddress } = useParams();
    const {
        isFetching,
        data: rawData,
        refetch,
    } = useGetItem({
        uid: feedAddress || '',
    });
    const { currentUser } = useUser();
    const { isPending, mutate } = useAddBid();
    const { isPending: isPendingMyBids, mutate: mutateMyBids } =
        useAddToMyBids();
    const data = rawData || ({} as ItemData);
    const currentBid = data.participants.reduce((acc, cur) => {
        const bidAmount = cur.placedBid;
        if (acc > bidAmount) return acc;
        return bidAmount;
    }, 0);

    const handleClose = () => {
        setIsOpen(false);
        formik.resetForm();
    };

    const isSubmitDisabled =
        data.type === ItemType.FIRST_BID ? currentBid > 0 : false;

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getPlaceBidDialogSchema(
            currentBid,
            currentUser?.totalBids || 0
        ),

        onSubmit: async (values, { setFieldError }) => {
            const { data: newestRawData } = await refetch();
            const newestData = newestRawData || ({} as ItemData);
            const currentNewestBid = newestData.participants.reduce(
                (acc, cur) => {
                    const bidAmount = cur.placedBid;
                    if (acc > bidAmount) return acc;
                    return bidAmount;
                },
                0
            );

            if (!currentUser || !feedAddress || !values.bid) return;

            if (
                newestData.type === ItemType.FIRST_BID &&
                currentNewestBid > 0
            ) {
                setFieldError(
                    'bid',
                    'Sorry, you cannot place a bid as another user has already placed one.'
                );
                return;
            }

            if (
                newestData.type === ItemType.AUCTION &&
                currentNewestBid >= values.bid
            ) {
                setFieldError(
                    'bid',
                    `Placed bid is less than or equal current bid ${currentNewestBid}`
                );
                return;
            }

            mutate(
                {
                    itemUid: feedAddress,
                    refToUserUid: currentUser.uid,
                    placedBid: values.bid,
                },
                {
                    onSuccess: () => {
                        mutateMyBids(
                            {
                                refToUserUid: currentUser.uid,
                                refToItem: feedAddress,
                            },
                            {
                                onSuccess: () => {
                                    handleClose();
                                    setOpenSuccessAlert(true);
                                },
                            }
                        );
                    },
                }
            );
        },
    });

    const isLoading = isFetching || isPending || isPendingMyBids;

    return (
        <>
            <CommonDialog
                isHidden={false}
                open={isOpen}
                onClose={handleClose}
                isSubmitting={isPending}
                maxWidth={500}
                title="Place bid"
            >
                <form onSubmit={formik.handleSubmit}>
                    <CustomTextField
                        type="number"
                        name="bid"
                        value={formik.values.bid}
                        onChange={formik.handleChange}
                        label="Bid amount"
                        sx={{ mb: 4 }}
                        {...getFormikError(formik, 'bid')}
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
                                loading={isLoading}
                                disabled={isSubmitDisabled}
                                variant="contained"
                                type="submit"
                            >
                                Place bid
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
                    You placed a bid successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default PlaceBidDialog;

import { useState } from 'react';
import { useParams } from 'react-router';
import { Timestamp } from 'firebase/firestore';
import { Alert, Box, Button, Grid2, Snackbar, Typography } from '@mui/material';

import { useIsMobile, useTimeLeft } from '@/hooks';
import { CustomLink } from '@/components/common';
import { useGetItem, useRemoveBid } from '@/dataAccess/hooks';
import { useUser } from '@/context/user-context';
import { ItemData, ItemStatus, ParticipantData } from '@/dataAccess/types';
import { HeartFilledSVG, HeartSVG } from '@/components/icons';

import {
    ParticipantBoxStyled,
    ParticipantImageStyled,
    ParticipantWrapperStyled,
} from './AuctionInfo.styled.ts';
import { PlaceBidDialog } from '../PlaceBidDialog';
import { AuctionInfoProps } from './AuctionInfo.types.ts';

const AuctionInfo = ({ isAuctionExpired }: AuctionInfoProps) => {
    const isMobile = useIsMobile();
    const { feedAddress } = useParams();
    const { currentUser } = useUser();
    const { isPending: isRemoveBidPending, mutate } = useRemoveBid();
    const { data: rawData } = useGetItem({
        uid: feedAddress || '',
    });
    const data = rawData || ({} as ItemData);

    const isEndedAuction =
        isAuctionExpired || data.status === ItemStatus.CLAIMED;

    const releasedAt = new Timestamp(
        data.releasedAt.seconds,
        data.releasedAt.nanoseconds
    );
    const timeLeft = useTimeLeft({
        releasedAt: releasedAt,
        duration: data.duration,
    });

    const totalParticipants = data.participants.length;
    const totalBids = data.participants.reduce(
        (acc, cur) => acc + cur.placedBid,
        0
    );
    const currentBid = data.participants.reduce((acc, cur) => {
        const bidAmount = cur.placedBid;
        if (acc > bidAmount) return acc;
        return bidAmount;
    }, 0);

    const isUserWonAuction =
        isAuctionExpired &&
        data.status === ItemStatus.ACTIVE &&
        !!data.participants.find((participant) => {
            const { user, placedBid } = participant as ParticipantData;

            return placedBid === currentBid && user.uid === currentUser?.uid;
        });

    const hasUserPlacedBid = !!data.participants.find((participant) => {
        const { user } = participant as ParticipantData;

        return user.uid === currentUser?.uid;
    });

    const [isBidDialogOpen, setIsBidDialogOpen] = useState(false);
    const [isRemoveBidOpen, setIsRemoveBidOpen] = useState(false);

    const handleRemoveBid = () => {
        if (!currentUser?.uid || !feedAddress) return;

        mutate(
            {
                refToUserUid: currentUser.uid,
                itemUid: feedAddress,
            },
            {
                onSuccess: () => {
                    setIsRemoveBidOpen(true);
                },
            }
        );
    };

    return (
        <>
            {isEndedAuction && (
                <Box>
                    <Typography variant="h3" color="text.highlight" mb={2}>
                        This auction is ended
                    </Typography>
                </Box>
            )}
            <Grid2 container spacing={4} mb={4}>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Participants
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            {totalParticipants}
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Total bids
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            {totalBids}
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Current Bid
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            {currentBid}
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Duration
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            {timeLeft}
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
            </Grid2>

            <Typography variant="h5" color="text.highlight" mb={2}>
                Latest 5 bids:
            </Typography>
            <ParticipantWrapperStyled mb={4}>
                {data.participants.slice(0, 5).map((participant) => {
                    const { user, placedBid } = participant as ParticipantData;

                    return (
                        <Box
                            key={user.uid}
                            display="flex"
                            alignItems="center"
                            columnGap={2}
                        >
                            <ParticipantImageStyled
                                src={user.image || '/user.png'}
                                alt="Photo"
                            />
                            <Typography>
                                {user.firstName} {user.lastName}: {placedBid}
                            </Typography>
                        </Box>
                    );
                })}

                {!data.participants.length && (
                    <Typography variant="h5" color="text.primary">
                        Nobody placed bid yet
                    </Typography>
                )}
            </ParticipantWrapperStyled>

            <Box
                display="flex"
                flexWrap="wrap"
                gap={4}
                mb={4}
                flexDirection={isMobile ? 'column' : 'row'}
            >
                <Button startIcon={<HeartSVG height="1rem" width="1rem" />}>
                    Add to favorite
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<HeartFilledSVG height="1rem" width="1rem" />}
                >
                    Remove from favorite
                </Button>
                {hasUserPlacedBid && (
                    <Button
                        disabled={isEndedAuction}
                        loading={isRemoveBidPending}
                        color="error"
                        variant="outlined"
                        onClick={handleRemoveBid}
                    >
                        Remove bid
                    </Button>
                )}
                <Button
                    disabled={isEndedAuction}
                    onClick={() => setIsBidDialogOpen(true)}
                >
                    Place a bid
                </Button>
            </Box>

            {isUserWonAuction && (
                <Box>
                    <Typography variant="h3" color="text.highlight" mb={2}>
                        Congratulation you won in this auction
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        flexWrap="wrap"
                        mb={2}
                    >
                        <Typography variant="h5" color="text.primary">
                            Contact info of current owner:
                        </Typography>
                        <CustomLink type="tel" to="tel:998951502301">
                            +998951502301
                        </CustomLink>
                    </Box>
                    <Button>Claim bid transaction</Button>
                </Box>
            )}

            <PlaceBidDialog
                isOpen={isBidDialogOpen}
                setIsOpen={setIsBidDialogOpen}
            />
            <Snackbar
                open={isRemoveBidOpen}
                autoHideDuration={4000}
                onClose={() => setIsRemoveBidOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setIsRemoveBidOpen(false)}
                    severity="success"
                    variant="filled"
                >
                    Bid was removed successfully!
                </Alert>
            </Snackbar>
        </>
    );
};

export default AuctionInfo;

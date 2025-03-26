import { useState } from 'react';
import { useParams } from 'react-router';
import { Timestamp } from 'firebase/firestore';
import { Alert, Box, Button, Grid2, Snackbar, Typography } from '@mui/material';

import { useIsMobile, useTimeLeft } from '@/hooks';
import { CustomLink } from '@/components/common';
import {
    useAddToFavorite,
    useControlTransaction,
    useGetItem,
    useRemoveBid,
    useRemoveFromFavorite,
} from '@/dataAccess/hooks';
import { useUser } from '@/context/user-context';
import {
    ItemData,
    ItemStatus,
    ItemType,
    ParticipantData,
} from '@/dataAccess/types';
import { HeartFilledSVG, HeartSVG } from '@/components/icons';

import {
    ParticipantBoxStyled,
    ParticipantImageStyled,
    ParticipantWrapperStyled,
} from './AuctionInfo.styled.ts';
import { PlaceBidDialog } from '../PlaceBidDialog';
import { MakeBidTransactionDialog } from '../MakeBidTransactionDialog';
import { AuctionInfoProps } from './AuctionInfo.types.ts';

const AuctionInfo = ({ isAuctionExpired }: AuctionInfoProps) => {
    const isMobile = useIsMobile();
    const { feedAddress } = useParams();
    const { currentUser, loading: isUserLoading } = useUser();

    const {
        isPending: isControlTransactionLoading,
        mutate: mutateControlTransaction,
    } = useControlTransaction();
    const { isPending: isAddToFavoritePending, mutate: mutateAddToFavorite } =
        useAddToFavorite();
    const {
        isPending: isRemoveFromFavoritePending,
        mutate: mutateRemoveFromFavorite,
    } = useRemoveFromFavorite();
    const { isPending: isRemoveBidPending, mutate: mutateRemoveBid } =
        useRemoveBid();
    const { isFetching: isDataFetching, data: rawData } = useGetItem({
        uid: feedAddress || '',
    });
    const data = rawData || ({} as ItemData);

    const isAlreadyInFavorite = !!currentUser?.favoriteFeeds.find(
        (feed) => feed.uid === feedAddress
    );

    const isEndedAuction =
        data.type === ItemType.AUCTION
            ? isAuctionExpired || data.status === ItemStatus.CLAIMED
            : data.status === ItemStatus.CLAIMED;

    const releasedAt = new Timestamp(
        (data.releasedAt as Timestamp)?.seconds,
        (data.releasedAt as Timestamp)?.nanoseconds
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

    const userHasHighestBid = !!data.participants.find((participant) => {
        const { user, placedBid } = participant as ParticipantData;

        return placedBid === currentBid && user.uid === currentUser?.uid;
    });

    const isUserWonAuction =
        data.type === ItemType.AUCTION
            ? isAuctionExpired &&
              data.status === ItemStatus.ACTIVE &&
              userHasHighestBid
            : data.status === ItemStatus.ACTIVE && userHasHighestBid;

    const hasUserPlacedBid = !!data.participants.find((participant) => {
        const { user } = participant as ParticipantData;

        return user.uid === currentUser?.uid;
    });

    const canUserPlaceBid =
        data.type === ItemType.FIRST_BID
            ? data.participants.length
                ? hasUserPlacedBid
                : true
            : true;

    const canOwnerAllowTransaction =
        data.type === ItemType.AUCTION
            ? isAuctionExpired && data.status === ItemStatus.ACTIVE
            : data.status === ItemStatus.ACTIVE;

    const latestParticipants =
        data?.participants
            ?.sort((a, b) => b.placedBid - a.placedBid)
            ?.slice(0, 5) || [];

    const [isBidDialogOpen, setIsBidDialogOpen] = useState(false);
    const [isRemoveBidOpen, setIsRemoveBidOpen] = useState(false);
    const [isMakeBidTransactionOpen, setIsMakeBidTransactionOpen] =
        useState(false);

    const handleControlTransaction = (isTransactionAllowed: boolean) => {
        mutateControlTransaction({
            refToItem: data?.uid,
            isTransactionAllowed,
        });
    };

    const handleRemoveBid = () => {
        if (!currentUser?.uid || !feedAddress) return;

        mutateRemoveBid(
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

    const handleAddToFavorite = () => {
        if (currentUser?.uid && feedAddress) {
            mutateAddToFavorite({
                refToUserUid: currentUser?.uid,
                refToItem: feedAddress,
            });
        }
    };

    const handleRemoveFromFavorite = () => {
        if (currentUser?.uid && feedAddress) {
            mutateRemoveFromFavorite({
                refToUserUid: currentUser?.uid,
                refToItem: feedAddress,
            });
        }
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
                <Grid2
                    size={{ xs: 6, sm: data.type === ItemType.AUCTION ? 3 : 4 }}
                >
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
                <Grid2
                    size={{ xs: 6, sm: data.type === ItemType.AUCTION ? 3 : 4 }}
                >
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
                <Grid2
                    size={{
                        xs: data.type === ItemType.AUCTION ? 6 : 12,
                        sm: data.type === ItemType.AUCTION ? 3 : 4,
                    }}
                >
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
                {data.type === ItemType.AUCTION && (
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
                )}
            </Grid2>

            <Typography variant="h5" color="text.highlight" mb={2}>
                Latest 5 highest bids:
            </Typography>
            <ParticipantWrapperStyled mb={4}>
                {latestParticipants.map((participant) => {
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
                flexDirection={isMobile ? 'column' : 'row'}
            >
                {data?.ownerUid !== currentUser?.uid && (
                    <>
                        {!isAlreadyInFavorite ? (
                            <Button
                                loading={
                                    isAddToFavoritePending || isUserLoading
                                }
                                startIcon={
                                    <HeartSVG height="1rem" width="1rem" />
                                }
                                onClick={handleAddToFavorite}
                            >
                                Add to favorite
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                loading={
                                    isRemoveFromFavoritePending || isUserLoading
                                }
                                startIcon={
                                    <HeartFilledSVG
                                        height="1rem"
                                        width="1rem"
                                    />
                                }
                                onClick={handleRemoveFromFavorite}
                            >
                                Remove from favorite
                            </Button>
                        )}
                    </>
                )}
                {!isEndedAuction &&
                    canUserPlaceBid &&
                    !(data.isTransactionAllowed && data.isClaimAllowed) &&
                    data.ownerUid !== currentUser?.uid && (
                        <>
                            {hasUserPlacedBid && (
                                <Button
                                    loading={isRemoveBidPending}
                                    color="error"
                                    variant="outlined"
                                    onClick={handleRemoveBid}
                                >
                                    Remove bid
                                </Button>
                            )}
                            <Button onClick={() => setIsBidDialogOpen(true)}>
                                {hasUserPlacedBid
                                    ? 'Update placed bid'
                                    : 'Place a bid'}
                            </Button>
                        </>
                    )}
            </Box>
            {!canUserPlaceBid && data.ownerUid !== currentUser?.uid && (
                <Typography variant="h4" color="text.highlight" mb={2}>
                    Sorry, you cannot place a bid as another user has already
                    placed one.
                </Typography>
            )}

            {data.ownerUid === currentUser?.uid && (
                <>
                    <Typography variant="h4" color="text.highlight" mb={2}>
                        You are owner of this item
                    </Typography>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        gap={4}
                        mb={4}
                        flexDirection={isMobile ? 'column' : 'row'}
                    >
                        {canOwnerAllowTransaction &&
                            !data.isClaimAllowed &&
                            currentBid > 0 && (
                                <>
                                    {!data.isTransactionAllowed ? (
                                        <Button
                                            loading={
                                                isControlTransactionLoading ||
                                                isDataFetching
                                            }
                                            onClick={() =>
                                                handleControlTransaction(true)
                                            }
                                        >
                                            Allow to make transaction
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            loading={
                                                isControlTransactionLoading ||
                                                isDataFetching
                                            }
                                            onClick={() =>
                                                handleControlTransaction(false)
                                            }
                                        >
                                            Remove allowance to make transaction
                                        </Button>
                                    )}
                                </>
                            )}
                        {data.status === ItemStatus.ACTIVE &&
                            data.isClaimAllowed && (
                                <Button>Claim bid transaction</Button>
                            )}
                    </Box>
                </>
            )}

            {isUserWonAuction && (
                <Box mt={4}>
                    <Typography variant="h3" color="text.highlight" mb={2}>
                        Congratulation you won in this auction
                    </Typography>
                    {data.status === ItemStatus.ACTIVE && (
                        <>
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
                                <CustomLink
                                    type="tel"
                                    to={`tel:${data.ownerPhone}`}
                                >
                                    {data.ownerPhone}
                                </CustomLink>
                            </Box>
                            {!data.isClaimAllowed &&
                                data.isTransactionAllowed && (
                                    <Button
                                        onClick={() =>
                                            setIsMakeBidTransactionOpen(true)
                                        }
                                    >
                                        Make bid transaction
                                    </Button>
                                )}
                        </>
                    )}
                </Box>
            )}

            <PlaceBidDialog
                isOpen={isBidDialogOpen}
                setIsOpen={setIsBidDialogOpen}
            />
            <MakeBidTransactionDialog
                isOpen={isMakeBidTransactionOpen}
                setIsOpen={setIsMakeBidTransactionOpen}
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

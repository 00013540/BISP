import { useParams } from 'react-router';
import { Box, Chip, Typography } from '@mui/material';

import { LocationSVG } from '@/components/icons';
import { useGetItem } from '@/dataAccess/hooks';
import { useUser } from '@/context/user-context';
import {
    ItemData,
    ItemStatus,
    ItemType,
    ParticipantData,
} from '@/dataAccess/types';

import { FeedInfoProps } from './FeedInfo.types.ts';

const FeedInfo = ({ isAuctionExpired }: FeedInfoProps) => {
    const { feedAddress } = useParams();

    const { currentUser } = useUser();
    const { data: rawData } = useGetItem({
        uid: feedAddress || '',
    });

    const data = rawData || ({} as ItemData);

    const currentBid = data.participants.reduce((acc, cur) => {
        const bidAmount = cur.placedBid;
        if (acc > bidAmount) return acc;
        return bidAmount;
    }, 0);

    const userHasHighestBid = !!data.participants.find((participant) => {
        const { user, placedBid } = participant as ParticipantData;

        return placedBid === currentBid && user.uid === currentUser?.uid;
    });
    const canOnlySeeOwnerOrWinner =
        data.ownerUid === currentUser?.uid || userHasHighestBid;

    const isTransactionStatusAvailable =
        data.type === ItemType.AUCTION
            ? isAuctionExpired &&
              currentBid > 0 &&
              (data.status === ItemStatus.ACTIVE ||
                  data.status === ItemStatus.CLAIMED)
            : currentBid > 0 &&
              data.isTransactionAllowed &&
              (data.status === ItemStatus.ACTIVE ||
                  data.status === ItemStatus.CLAIMED);

    return (
        <>
            <Typography variant="body1" mb={3}>
                {data.title}
            </Typography>
            <Typography variant="body1" mb={3}>
                {data.description}
            </Typography>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
                <Typography variant="body1">Auction type:</Typography>
                {data.type === ItemType.FIRST_BID && (
                    <Chip label="First Bid" color="success" size="medium" />
                )}
                {data.type === ItemType.AUCTION && (
                    <Chip label="Auction" color="success" size="medium" />
                )}
            </Box>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
                <Typography variant="body1">Auction status:</Typography>
                {data.status === ItemStatus.ACTIVE && (
                    <>
                        {data.type === ItemType.AUCTION &&
                            (isAuctionExpired ? (
                                <Chip
                                    label="Ended"
                                    color="error"
                                    size="medium"
                                />
                            ) : (
                                <Chip
                                    label="Active"
                                    color="success"
                                    size="medium"
                                />
                            ))}

                        {data.type === ItemType.FIRST_BID && (
                            <Chip
                                label="Active"
                                color="success"
                                size="medium"
                            />
                        )}
                    </>
                )}
                {data.status === ItemStatus.CLAIMED && (
                    <Chip label="Claimed" color="success" size="medium" />
                )}
            </Box>
            {isTransactionStatusAvailable && canOnlySeeOwnerOrWinner && (
                <Box mb={3} display="flex" alignItems="center" gap={2}>
                    <Typography variant="body1">Transaction status:</Typography>
                    {data.isClaimAllowed ? (
                        <Chip color="success" label="Done" />
                    ) : (
                        <Chip color="warning" label="Waiting" />
                    )}
                </Box>
            )}
            <Box display="flex" alignItems="center" columnGap={1} mb={4}>
                <LocationSVG height="1rem" width="1rem" />
                <Typography variant="body1">{data.address}</Typography>
            </Box>
        </>
    );
};

export default FeedInfo;

import { useParams } from 'react-router';
import { Box, Chip, Typography } from '@mui/material';

import { LocationSVG } from '@/components/icons';
import { useGetItem } from '@/dataAccess/hooks';
import { ItemData, ItemStatus, ItemType } from '@/dataAccess/types';

import { FeedInfoProps } from './FeedInfo.types.ts';

const FeedInfo = ({ isAuctionExpired }: FeedInfoProps) => {
    const { feedAddress } = useParams();
    const { data: rawData } = useGetItem({
        uid: feedAddress || '',
    });

    const data = rawData || ({} as ItemData);

    return (
        <>
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
                {data.status === ItemStatus.ACTIVE &&
                    (isAuctionExpired ? (
                        <Chip label="Ended" color="error" size="medium" />
                    ) : (
                        <Chip label="Active" color="success" size="medium" />
                    ))}
                {data.status === ItemStatus.CLAIMED && (
                    <Chip label="Claimed" color="success" size="medium" />
                )}
            </Box>
            <Box display="flex" alignItems="center" columnGap={1} mb={4}>
                <LocationSVG height="1rem" width="1rem" />
                <Typography variant="body1">{data.address}</Typography>
            </Box>
        </>
    );
};

export default FeedInfo;

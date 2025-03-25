import { Box, Chip, Typography } from '@mui/material';
import { LocationSVG } from '@/components/icons';
import { useParams } from 'react-router';
import { useGetItem } from '@/dataAccess/hooks';
import { ItemData } from '@/dataAccess/types';

const FeedInfo = () => {
    const { feedAddress } = useParams();
    const { data: rawData } = useGetItem({
        uid: feedAddress || '',
    });

    const data = rawData || ({} as ItemData);

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
            >
                <Typography variant="h3">{data.title}</Typography>
                <Box display="flex" alignItems="center" columnGap={2}>
                    <Chip label="First Bid" color="success" size="medium" />
                    <Chip label="Auction" color="success" size="medium" />
                    <Chip label="Active" color="success" size="medium" />
                    <Chip label="Claimed" color="success" size="medium" />
                    <Chip label="Ended" color="error" size="medium" />
                </Box>
            </Box>
            <Typography variant="body1" mb={3}>
                {data.description}
            </Typography>
            <Box display="flex" alignItems="center" columnGap={1} mb={4}>
                <LocationSVG height="1rem" width="1rem" />
                <Typography variant="body1">{data.address}</Typography>
            </Box>
        </>
    );
};

export default FeedInfo;

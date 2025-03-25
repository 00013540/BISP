import { useParams } from 'react-router';
import { Grid2 } from '@mui/material';
import { Timestamp } from 'firebase/firestore';

import { useGetItem } from '@/dataAccess/hooks';
import { ItemData } from '@/dataAccess/types';
import { Loader } from '@/components/common';
import { hasDurationPassed } from '@/utils';

import { FeedInfo, AuctionInfo } from './components';
import { WrapperStyled, ImageStyled } from './Overview.styled.ts';

const Overview = () => {
    const { feedAddress } = useParams();
    const { isLoading, data: rawData } = useGetItem({
        uid: feedAddress || '',
    });

    const data = rawData || ({} as ItemData);
    const releasedAt = new Timestamp(
        data.releasedAt.seconds,
        data.releasedAt.nanoseconds
    );

    const isAuctionExpired = hasDurationPassed(releasedAt, data.duration);
    return (
        <WrapperStyled
            sx={{
                display: isLoading ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLoading && <Loader size={60} />}
            {!isLoading && (
                <Grid2 container spacing={{ xs: 6, md: 12 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageStyled src={data.image} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <FeedInfo isAuctionExpired={isAuctionExpired} />
                        <AuctionInfo isAuctionExpired={isAuctionExpired} />
                    </Grid2>
                </Grid2>
            )}
        </WrapperStyled>
    );
};

export default Overview;

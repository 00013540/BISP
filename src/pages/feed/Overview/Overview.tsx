import { Navigate, useNavigate, useParams } from 'react-router';
import { Grid2, Button, Box } from '@mui/material';
import { Timestamp } from 'firebase/firestore';

import { useGetItem } from '@/dataAccess/hooks';
import { Loader } from '@/components/common';
import { hasDurationPassed } from '@/utils';
import { ItemData, ItemStatus } from '@/dataAccess/types';
import { ChevronLeftSVG } from '@/components/icons';

import { AuctionInfo, FeedInfo } from './components';
import { ImageStyled, WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const navigate = useNavigate();
    const { feedAddress } = useParams();
    const { isLoading, data: rawData } = useGetItem({
        uid: feedAddress || '',
    });

    const data = rawData || ({} as ItemData);
    const releasedAt = new Timestamp(
        (data.releasedAt as Timestamp)?.seconds,
        (data.releasedAt as Timestamp)?.nanoseconds
    );

    const isAuctionExpired = hasDurationPassed(releasedAt, data.duration);
    return (
        <>
            <WrapperStyled
                sx={{
                    display: isLoading ? 'flex' : 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {!isLoading && data.status === ItemStatus.NEW && (
                    <Navigate to={'/404'} replace={true} />
                )}
                {isLoading && <Loader size={60} />}
                {!isLoading && (
                    <>
                        <Box mb={4}>
                            <Button
                                variant="outlined"
                                size="medium"
                                startIcon={
                                    <ChevronLeftSVG
                                        height="1rem"
                                        width="1rem"
                                    />
                                }
                                onClick={() => navigate(-1)}
                            >
                                Go back
                            </Button>
                        </Box>
                        <Grid2 container spacing={{ xs: 6, md: 12 }}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <ImageStyled src={data.image} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <FeedInfo isAuctionExpired={isAuctionExpired} />
                                <AuctionInfo
                                    isAuctionExpired={isAuctionExpired}
                                />
                            </Grid2>
                        </Grid2>
                    </>
                )}
            </WrapperStyled>
        </>
    );
};

export default Overview;

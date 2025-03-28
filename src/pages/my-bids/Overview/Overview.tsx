import { useMemo, useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import { useSearchParams } from 'react-router';

import { useUser } from '@/context/user-context';
import { CustomCard, Loader, ZeroItemsLayout } from '@/components/common';
import { ItemStatus } from '@/dataAccess/types';

import { Filters } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const statusParam = searchParams.get('status')?.toUpperCase() || '';

    const [status, setStatus] = useState(statusParam);

    const { loading: isLoading, currentUser } = useUser();

    const data = useMemo(() => {
        if (!status) return currentUser?.myBids || [];
        return currentUser?.myBids?.filter((item) => item.status === status);
    }, [currentUser?.myBids, status]);

    const handleChangeStatus = (newStatus: string) => {
        setStatus(newStatus as ItemStatus);
        if (!newStatus) {
            setSearchParams({});
        } else {
            setSearchParams({ status: newStatus });
        }
    };

    return (
        <WrapperStyled
            sx={{
                display: isLoading ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLoading && (
                <Box height="calc(100vh - 2rem)" width="100%">
                    <Loader size={60} />
                </Box>
            )}
            {!isLoading && (
                <>
                    <Filters
                        mb={4}
                        value={status}
                        handleChangeStatus={handleChangeStatus}
                    />
                    {data && data.length > 0 && (
                        <Grid2 container spacing={2}>
                            {data?.map(
                                ({
                                    uid,
                                    title,
                                    description,
                                    category,
                                    address,
                                    image,
                                    imageStoragePath,
                                    status,
                                    type,
                                    ownerUid,
                                }) => (
                                    <Grid2
                                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                    >
                                        <CustomCard
                                            showFavoriteIcon
                                            key={uid}
                                            uid={uid}
                                            title={title}
                                            description={description}
                                            category={category}
                                            address={address}
                                            image={image}
                                            status={status}
                                            type={type}
                                            imageStoragePath={imageStoragePath}
                                            ownerUid={ownerUid}
                                        />
                                    </Grid2>
                                )
                            )}
                        </Grid2>
                    )}
                    {!data?.length && (
                        <Box sx={{ mt: { xs: 30, sm: 40 } }}>
                            <ZeroItemsLayout
                                hint="Sorry, there is no data to show now."
                                desc="No data is found."
                            />
                        </Box>
                    )}
                </>
            )}
        </WrapperStyled>
    );
};

export default Overview;

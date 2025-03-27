import { useMemo, useState } from 'react';
import { Grid2 } from '@mui/material';
import { useSearchParams } from 'react-router';

import { useUser } from '@/context/user-context';
import { CustomCard, Loader } from '@/components/common';
import { ItemStatus } from '@/dataAccess/types';

import { Filters } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const statusParam = searchParams.get('status')?.toUpperCase() || '';

    const [status, setStatus] = useState(statusParam);

    const { loading: isLoading, currentUser } = useUser();

    const data = useMemo(() => {
        if (!status) return currentUser?.favoriteFeeds || [];
        return currentUser?.favoriteFeeds?.filter(
            (item) => item.status === status
        );
    }, [currentUser?.favoriteFeeds, status]);

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
            {isLoading && <Loader size={60} />}
            {!isLoading && (
                <>
                    <Filters
                        mb={4}
                        value={status}
                        handleChangeStatus={handleChangeStatus}
                    />
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
                                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
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
                </>
            )}
        </WrapperStyled>
    );
};

export default Overview;

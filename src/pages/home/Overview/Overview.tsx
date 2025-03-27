import { Button, Grid2 } from '@mui/material';

import { ItemStatus } from '@/dataAccess/types';
import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard } from '@/components/common';

import { WrapperStyled, ContentWrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const { data } = useGetItems({
        status: ItemStatus.ACTIVE,
    });

    return (
        <WrapperStyled>
            <ContentWrapperStyled mb={4}>
                <Button>New feed</Button>
            </ContentWrapperStyled>
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
                                type={type}
                                key={uid}
                                uid={uid}
                                title={title}
                                description={description}
                                category={category}
                                address={address}
                                image={image}
                                status={status}
                                imageStoragePath={imageStoragePath}
                                ownerUid={ownerUid}
                            />
                        </Grid2>
                    )
                )}
            </Grid2>
        </WrapperStyled>
    );
};

export default Overview;

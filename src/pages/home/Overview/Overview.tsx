import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Grid2 } from '@mui/material';

import { ItemStatus } from '@/dataAccess/types';
import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard } from '@/components/common';

import { Filters } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || '';

    const [category, setCategory] = useState(categoryParam);

    const { data } = useGetItems({
        status: ItemStatus.ACTIVE,
        category: category || null,
    });

    const handleChangeCategory = (newCategory: string) => {
        setCategory(newCategory);
        if (!newCategory) {
            setSearchParams({});
        } else {
            setSearchParams({ category: newCategory });
        }
    };

    return (
        <WrapperStyled>
            <Filters
                mb={4}
                value={category}
                handleChangeCategory={handleChangeCategory}
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

import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Grid2 } from '@mui/material';

import { debounce } from '@/utils';
import { ItemStatus } from '@/dataAccess/types';
import { CustomCard, Loader } from '@/components/common';
import { useGetCategories, useGetItems } from '@/dataAccess/hooks';

import { Filters } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('search') || '';
    const categoryParam = searchParams.get('category') || '';

    const [searchQuery, setSearchQuery] = useState(searchParam);
    const [search, setSearch] = useState(searchParam);
    const [category, setCategory] = useState(categoryParam);

    const { isLoading: isLoadingCategories } = useGetCategories();
    const { isLoading: isLoadingItems, data: rawData } = useGetItems({
        status: ItemStatus.ACTIVE,
        category: category || null,
    });

    const isLoading = isLoadingItems || isLoadingCategories;

    const data = useMemo(() => {
        const newRawData = rawData || [];
        return newRawData.filter(
            (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, rawData]);

    const handleChangeSearch = (newSearch: string) => {
        setSearch(newSearch);
    };

    const handleChangeDebounceSearch = useMemo(
        () =>
            debounce((newSearch?: string) => {
                setSearchQuery(newSearch || '');

                if (!newSearch) {
                    if (category) {
                        setSearchParams({
                            category,
                        });
                    } else {
                        setSearchParams({});
                    }
                } else {
                    if (category) {
                        setSearchParams({
                            search: newSearch,
                            category,
                        });
                    } else {
                        setSearchParams({ search: newSearch });
                    }
                }
            }, 300),
        [category, setSearchParams]
    );

    const handleChangeCategory = (newCategory: string) => {
        const oldSearchParam = searchParams.get('search') || '';

        setCategory(newCategory);
        if (!newCategory) {
            if (oldSearchParam) {
                setSearchParams({ search: oldSearchParam });
            } else {
                setSearchParams({});
            }
        } else {
            if (oldSearchParam) {
                setSearchParams({
                    search: oldSearchParam,
                    category: newCategory,
                });
            } else {
                setSearchParams({
                    category: newCategory,
                });
            }
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
                        value={category}
                        searchValue={search}
                        handleChangeSearch={handleChangeSearch}
                        handleChangeCategory={handleChangeCategory}
                        handleChangeDebounceSearch={handleChangeDebounceSearch}
                    />
                    <Grid2 container spacing={2}>
                        {data?.map(
                            (
                                {
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
                                },
                                index
                            ) => (
                                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                    <CustomCard
                                        showFavoriteIcon
                                        type={type}
                                        key={`${uid}-${index}`}
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
                </>
            )}
        </WrapperStyled>
    );
};

export default Overview;

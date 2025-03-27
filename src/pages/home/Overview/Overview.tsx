import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Grid2 } from '@mui/material';

import { debounce } from '@/utils';
import { ItemStatus } from '@/dataAccess/types';
import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard } from '@/components/common';

import { Filters } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('search') || '';
    const categoryParam = searchParams.get('category') || '';

    const [searchQuery, setSearchQuery] = useState(searchParam);
    const [search, setSearch] = useState(searchParam);
    const [category, setCategory] = useState(categoryParam);

    const { data: rawData } = useGetItems({
        status: ItemStatus.ACTIVE,
        category: category || null,
    });

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
                    category
                        ? setSearchParams({
                              category,
                          })
                        : setSearchParams({});
                } else {
                    category
                        ? setSearchParams({
                              search: newSearch,
                              category,
                          })
                        : setSearchParams({ search: newSearch });
                }
            }, 300),
        [category]
    );

    const handleChangeCategory = (newCategory: string) => {
        const oldSearchParam = searchParams.get('search') || '';

        setCategory(newCategory);
        if (!newCategory) {
            oldSearchParam
                ? setSearchParams({ search: oldSearchParam })
                : setSearchParams({});
        } else {
            oldSearchParam
                ? setSearchParams({
                      search: oldSearchParam,
                      category: newCategory,
                  })
                : setSearchParams({
                      category: newCategory,
                  });
        }
    };

    return (
        <WrapperStyled>
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
        </WrapperStyled>
    );
};

export default Overview;

import { useGetCategories } from '@/dataAccess/hooks';
import { StatusFilters } from '@/components/common';

import { FiltersProps } from './Filters.types.ts';
import { FiltersWrapperStyled } from './Filters.styled.ts';

const Filters = ({ value, handleChangeCategory, ...props }: FiltersProps) => {
    const { data: rawData } = useGetCategories();
    const data = rawData || [];

    const options = [
        {
            label: 'All',
            value: '',
        },
        ...data.map((category) => ({
            label: category.name,
            value: category.name,
        })),
    ];

    return (
        <FiltersWrapperStyled {...props}>
            <StatusFilters
                value={value}
                onChange={handleChangeCategory}
                options={options}
            />
        </FiltersWrapperStyled>
    );
};

export default Filters;

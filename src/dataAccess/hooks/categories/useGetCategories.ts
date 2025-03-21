import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { Category } from '../../types';
import { getCategories } from '../../services';
import { getCategoriesKey } from '../getQueryKeys.ts';

export const useGetCategories = (
    queryOptions?: Partial<UseQueryOptions<Category[] | null, FirebaseError>>
): UseQueryResult<Category[] | null, FirebaseError> => {
    return useQuery({
        queryKey: getCategoriesKey(),
        queryFn: getCategories,
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

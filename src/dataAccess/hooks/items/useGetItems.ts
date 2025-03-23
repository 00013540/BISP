import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { ItemData } from '../../types';
import { getItems } from '../../services';
import { getItemsKey } from '../getQueryKeys.ts';

export const useGetItems = (
    filters?: Record<string, string | null>,
    queryOptions?: Partial<UseQueryOptions<ItemData[] | null, FirebaseError>>
): UseQueryResult<ItemData[] | null, FirebaseError> => {
    return useQuery({
        queryKey: getItemsKey(filters),
        queryFn: () => getItems(filters),
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

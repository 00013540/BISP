import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { ItemData, GetItemParams } from '../../types';
import { getItem } from '../../services';
import { getItemKey } from '../getQueryKeys.ts';

export const useGetItem = (
    params: GetItemParams,
    queryOptions?: Partial<UseQueryOptions<ItemData | null, FirebaseError>>
): UseQueryResult<ItemData | null, FirebaseError> => {
    return useQuery({
        queryKey: getItemKey(params),
        queryFn: () => getItem(params.uid),
        placeholderData: keepPreviousData,
        // refetchInterval: 1000 * 10,
        ...queryOptions,
    });
};

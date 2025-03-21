import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { ItemData } from '../../types';
import { getItem } from '../../services';
import { getItemKey } from '../getQueryKeys.ts';

export const useGetItem = (
    uid: string,
    queryOptions?: Partial<UseQueryOptions<ItemData | null, FirebaseError>>
): UseQueryResult<ItemData | null, FirebaseError> => {
    return useQuery({
        queryKey: getItemKey(),
        queryFn: () => getItem(uid),
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

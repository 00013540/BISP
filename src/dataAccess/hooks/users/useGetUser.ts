import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { User } from '../../types';
import { getUser } from '../../services';
import { getUserKey } from '../getQueryKeys.ts';

export const useGetUser = (
    uid: string,
    queryOptions?: Partial<UseQueryOptions<User | null, FirebaseError>>
): UseQueryResult<User | null, FirebaseError> => {
    return useQuery({
        queryKey: getUserKey(),
        queryFn: () => getUser(uid),
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

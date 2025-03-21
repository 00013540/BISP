import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { UserData } from '../../types';
import { getUser } from '../../services';
import { getUserKey } from '../getQueryKeys.ts';

export const useGetUser = (
    uid: string,
    queryOptions?: Partial<UseQueryOptions<UserData | null, FirebaseError>>
): UseQueryResult<UserData | null, FirebaseError> => {
    return useQuery({
        queryKey: getUserKey(),
        queryFn: () => getUser(uid),
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

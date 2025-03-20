import {
    UseQueryResult,
    UseQueryOptions,
    useQuery,
    keepPreviousData,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { User } from '../types';
import { getUsers } from '../services';
import { getUsersKey } from './getQueryKeys';

export const useGetUsers = (
    queryOptions?: Partial<UseQueryOptions<User[] | null, FirebaseError>>
): UseQueryResult<User[] | null, FirebaseError> => {
    return useQuery({
        queryKey: getUsersKey(),
        queryFn: () => getUsers(),
        placeholderData: keepPreviousData,
        ...queryOptions,
    });
};

import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { queryClient } from '@/dataAccess/reactQuery';
import { getUserKey } from '@/dataAccess/hooks/getQueryKeys.ts';

import { UpdateUserData } from '../../types';
import { updateUser } from '../../services';

export const useUpdateUser = (
    mutationOptions?: Partial<
        UseMutationOptions<UpdateUserData, FirebaseError, UpdateUserData>
    >
): UseMutationResult<UpdateUserData, FirebaseError, UpdateUserData> => {
    return useMutation({
        mutationFn: updateUser,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.uid),
            });
        },
        ...mutationOptions,
    });
};

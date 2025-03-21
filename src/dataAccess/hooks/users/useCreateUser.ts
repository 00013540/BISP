import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { CreateUserData } from '../../types';
import { createUser } from '../../services';

export const useCreateUser = (
    mutationOptions?: Partial<
        UseMutationOptions<CreateUserData, FirebaseError, CreateUserData>
    >
): UseMutationResult<CreateUserData, FirebaseError, CreateUserData> => {
    return useMutation({
        mutationFn: createUser,
        ...mutationOptions,
    });
};

import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { imageDelete } from '../../services';

export const useImageDelete = (
    mutationOptions?: Partial<UseMutationOptions<null, FirebaseError, string>>
): UseMutationResult<null, FirebaseError, string> => {
    return useMutation({
        mutationFn: imageDelete,
        ...mutationOptions,
    });
};

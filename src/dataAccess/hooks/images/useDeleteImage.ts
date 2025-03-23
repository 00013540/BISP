import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { deleteImage } from '../../services';

export const useDeleteImage = (
    mutationOptions?: Partial<UseMutationOptions<null, FirebaseError, string>>
): UseMutationResult<null, FirebaseError, string> => {
    return useMutation({
        mutationFn: deleteImage,
        ...mutationOptions,
    });
};

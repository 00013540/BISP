import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { createImage } from '../../services';
import { ImageUploadResponse } from '../../types';

export const useCreateImage = (
    mutationOptions?: Partial<
        UseMutationOptions<ImageUploadResponse, FirebaseError, File>
    >
): UseMutationResult<ImageUploadResponse, FirebaseError, File> => {
    return useMutation({
        mutationFn: createImage,
        ...mutationOptions,
    });
};

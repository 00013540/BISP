import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { imageUpload } from '../../services';
import { ImageUploadResponse } from '../../types';

export const useImageUpload = (
    mutationOptions?: Partial<
        UseMutationOptions<ImageUploadResponse, FirebaseError, File>
    >
): UseMutationResult<ImageUploadResponse, FirebaseError, File> => {
    return useMutation({
        mutationFn: imageUpload,
        ...mutationOptions,
    });
};

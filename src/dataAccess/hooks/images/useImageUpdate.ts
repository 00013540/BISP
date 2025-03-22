import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { imageUpdate } from '../../services';
import { ImageUploadResponse } from '../../types';

export const useImageUpdate = (
    mutationOptions?: Partial<
        UseMutationOptions<
            ImageUploadResponse,
            FirebaseError,
            {
                image: File;
                imagePath: string;
            }
        >
    >
): UseMutationResult<
    ImageUploadResponse,
    FirebaseError,
    {
        image: File;
        imagePath: string;
    }
> => {
    return useMutation({
        mutationFn: imageUpdate,
        ...mutationOptions,
    });
};

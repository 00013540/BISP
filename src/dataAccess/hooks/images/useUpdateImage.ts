import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { updateImage } from '../../services';
import { ImageUploadResponse } from '../../types';

export const useUpdateImage = (
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
        mutationFn: updateImage,
        ...mutationOptions,
    });
};

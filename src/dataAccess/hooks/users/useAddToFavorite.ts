import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getUserKey } from '../getQueryKeys.ts';
import { AddToFavoriteData } from '../../types';
import { addToFavorite } from '../../services';

export const useAddToFavorite = (
    mutationOptions?: Partial<
        UseMutationOptions<AddToFavoriteData, FirebaseError, AddToFavoriteData>
    >
): UseMutationResult<AddToFavoriteData, FirebaseError, AddToFavoriteData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToFavorite,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.refToUserUid),
            });
        },
        ...mutationOptions,
    });
};

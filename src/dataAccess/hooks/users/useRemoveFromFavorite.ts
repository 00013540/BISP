import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getUserKey } from '../getQueryKeys.ts';
import { RemoveFromFavoriteData } from '../../types';
import { removeFromFavorite } from '../../services';

export const useRemoveFromFavorite = (
    mutationOptions?: Partial<
        UseMutationOptions<
            RemoveFromFavoriteData,
            FirebaseError,
            RemoveFromFavoriteData
        >
    >
): UseMutationResult<
    RemoveFromFavoriteData,
    FirebaseError,
    RemoveFromFavoriteData
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeFromFavorite,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.refToUserUid),
            });
        },
        ...mutationOptions,
    });
};

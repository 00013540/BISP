import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getUserKey } from '../getQueryKeys.ts';
import { RemoveFromMyBidsData } from '../../types';
import { removeFromMyBids } from '../../services';

export const useRemoveFromMyBids = (
    mutationOptions?: Partial<
        UseMutationOptions<
            RemoveFromMyBidsData,
            FirebaseError,
            RemoveFromMyBidsData
        >
    >
): UseMutationResult<
    RemoveFromMyBidsData,
    FirebaseError,
    RemoveFromMyBidsData
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeFromMyBids,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.refToUserUid),
            });
        },
        ...mutationOptions,
    });
};

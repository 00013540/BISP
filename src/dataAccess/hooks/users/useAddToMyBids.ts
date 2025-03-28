import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getUserKey } from '../getQueryKeys.ts';
import { AddToMyBidsData } from '../../types';
import { addToMyBids } from '../../services';

export const useAddToMyBids = (
    mutationOptions?: Partial<
        UseMutationOptions<AddToMyBidsData, FirebaseError, AddToMyBidsData>
    >
): UseMutationResult<AddToMyBidsData, FirebaseError, AddToMyBidsData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToMyBids,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.refToUserUid),
            });
        },
        ...mutationOptions,
    });
};

import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemKey } from '../getQueryKeys.ts';
import { RemoveBidData } from '../../types';
import { removeBid } from '../../services';

export const useRemoveBid = (
    mutationOptions?: Partial<
        UseMutationOptions<RemoveBidData, FirebaseError, RemoveBidData>
    >
): UseMutationResult<RemoveBidData, FirebaseError, RemoveBidData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeBid,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemKey() });
        },
        ...mutationOptions,
    });
};

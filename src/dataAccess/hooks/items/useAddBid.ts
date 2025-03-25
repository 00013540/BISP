import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemKey } from '../getQueryKeys.ts';
import { AddBidData } from '../../types';
import { addBid } from '../../services';

export const useAddBid = (
    mutationOptions?: Partial<
        UseMutationOptions<AddBidData, FirebaseError, AddBidData>
    >
): UseMutationResult<AddBidData, FirebaseError, AddBidData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addBid,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemKey() });
        },
        ...mutationOptions,
    });
};

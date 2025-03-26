import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemKey } from '../getQueryKeys.ts';
import { ClaimBidTransactionData } from '../../types';
import { claimBidTransaction } from '../../services';

export const useClaimBidTransaction = (
    mutationOptions?: Partial<
        UseMutationOptions<
            ClaimBidTransactionData,
            FirebaseError,
            ClaimBidTransactionData
        >
    >
): UseMutationResult<
    ClaimBidTransactionData,
    FirebaseError,
    ClaimBidTransactionData
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: claimBidTransaction,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getItemKey({ uid: variables.refToItem }),
            });
        },
        ...mutationOptions,
    });
};

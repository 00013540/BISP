import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getUserKey } from '../getQueryKeys.ts';
import { MakeBidTransactionData } from '../../types';
import { makeBidTransaction } from '../../services';

export const useMakeBidTransaction = (
    mutationOptions?: Partial<
        UseMutationOptions<
            MakeBidTransactionData,
            FirebaseError,
            MakeBidTransactionData
        >
    >
): UseMutationResult<
    MakeBidTransactionData,
    FirebaseError,
    MakeBidTransactionData
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: makeBidTransaction,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getUserKey(variables.fromUser),
            });
        },
        ...mutationOptions,
    });
};

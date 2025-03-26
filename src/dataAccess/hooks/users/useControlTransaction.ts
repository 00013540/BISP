import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemKey } from '../getQueryKeys.ts';
import { ControlTransactionData } from '../../types';
import { controlTransaction } from '../../services';

export const useControlTransaction = (
    mutationOptions?: Partial<
        UseMutationOptions<
            ControlTransactionData,
            FirebaseError,
            ControlTransactionData
        >
    >
): UseMutationResult<
    ControlTransactionData,
    FirebaseError,
    ControlTransactionData
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: controlTransaction,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: getItemKey({ uid: variables.refToItem }),
            });
        },
        ...mutationOptions,
    });
};

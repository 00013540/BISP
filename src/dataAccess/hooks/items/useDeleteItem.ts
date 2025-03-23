import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemsKey } from '../getQueryKeys.ts';
import { deleteItem } from '../../services';

export const useDeleteItem = (
    mutationOptions?: Partial<UseMutationOptions<null, FirebaseError, string>>
): UseMutationResult<null, FirebaseError, string> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemsKey() });
        },
        ...mutationOptions,
    });
};

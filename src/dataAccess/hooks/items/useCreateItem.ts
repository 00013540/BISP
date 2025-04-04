import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemsKey } from '../getQueryKeys.ts';
import { CreateItemData } from '../../types';
import { createItem } from '../../services';

export const useCreateItem = (
    mutationOptions?: Partial<
        UseMutationOptions<CreateItemData, FirebaseError, CreateItemData>
    >
): UseMutationResult<CreateItemData, FirebaseError, CreateItemData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemsKey() });
        },
        ...mutationOptions,
    });
};

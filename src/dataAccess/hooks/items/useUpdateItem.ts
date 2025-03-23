import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemsKey } from '../getQueryKeys.ts';
import { UpdateItemData } from '../../types';
import { updateItem } from '../../services';

export const useUpdateItem = (
    mutationOptions?: Partial<
        UseMutationOptions<UpdateItemData, FirebaseError, UpdateItemData>
    >
): UseMutationResult<UpdateItemData, FirebaseError, UpdateItemData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemsKey() });
        },
        ...mutationOptions,
    });
};

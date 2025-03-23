import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { getItemsKey } from '../getQueryKeys.ts';
import { ActivateItemData } from '../../types';
import { activateItem } from '../../services';

export const useActivateItem = (
    mutationOptions?: Partial<
        UseMutationOptions<ActivateItemData, FirebaseError, ActivateItemData>
    >
): UseMutationResult<ActivateItemData, FirebaseError, ActivateItemData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: activateItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getItemsKey() });
        },
        ...mutationOptions,
    });
};

import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { CreateItemData } from '../../types';
import { createItem } from '../../services';

export const useCreateItem = (
    mutationOptions?: Partial<
        UseMutationOptions<CreateItemData, FirebaseError, CreateItemData>
    >
): UseMutationResult<CreateItemData, FirebaseError, CreateItemData> => {
    return useMutation({
        mutationFn: createItem,
        ...mutationOptions,
    });
};

import {
    UseMutationResult,
    UseMutationOptions,
    useMutation,
} from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { CategoryType } from '../../types';
import { createCategory } from '../../services';

export const useCreateCategory = (
    category: CategoryType,
    mutationOptions?: Partial<
        UseMutationOptions<CategoryType, FirebaseError, CategoryType>
    >
): UseMutationResult<CategoryType, FirebaseError, CategoryType> => {
    return useMutation({
        mutationFn: () => createCategory(category),
        ...mutationOptions,
    });
};

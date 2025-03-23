import type { QueryKey } from '@tanstack/react-query';

export const getUserKey = (): QueryKey => ['user'];

export const getItemsKey = (
    filters?: Record<string, string | null>
): QueryKey => ['items', filters].filter(Boolean);

export const getItemKey = (): QueryKey => ['item'];

export const getCategoriesKey = (): QueryKey => ['categories'];

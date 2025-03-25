import type { QueryKey } from '@tanstack/react-query';

import { GetItemParams } from '../types';

export const getUserKey = (): QueryKey => ['user'];

export const getItemsKey = (
    filters?: Record<string, string | null>
): QueryKey => ['items', filters].filter(Boolean);

export const getItemKey = (params: GetItemParams): QueryKey =>
    ['item', params].filter(Boolean);

export const getCategoriesKey = (): QueryKey => ['categories'];

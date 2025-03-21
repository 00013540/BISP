import type { QueryKey } from '@tanstack/react-query';

export const getUserKey = (): QueryKey => ['user'];

export const getItemsKey = (): QueryKey => ['items'];

export const getItemKey = (): QueryKey => ['item'];

export const getCategoriesKey = (): QueryKey => ['categories'];

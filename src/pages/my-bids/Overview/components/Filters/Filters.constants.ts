import { ItemStatus } from '@/dataAccess/types';

export const OPTIONS = [
    {
        label: 'All',
        value: '',
    },
    {
        label: 'Active',
        value: ItemStatus.ACTIVE,
    },
    {
        label: 'Claimed',
        value: ItemStatus.CLAIMED,
    },
];

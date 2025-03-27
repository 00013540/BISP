import { ItemStatus } from '@/dataAccess/types';

export const OPTIONS = [
    {
        label: 'All',
        value: '',
    },
    {
        label: 'New',
        value: ItemStatus.NEW,
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

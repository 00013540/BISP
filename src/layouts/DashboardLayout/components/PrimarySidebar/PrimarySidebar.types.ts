import type { ElementType } from 'react';

export type PrimarySidebarProps = {
    isOpen: boolean;
    closeSidebars: () => void;
};

export type PrimarySidebarCategoryProps = {
    id: string;
    name?: string;
    className?: string | boolean;
    to?: string;
    icon?: ElementType;
    updateActiveCollapseId?: (id: string) => void;
    closeSidebars?: () => void;
    collapsable?: boolean;
    isCollapseOpen?: boolean;
};

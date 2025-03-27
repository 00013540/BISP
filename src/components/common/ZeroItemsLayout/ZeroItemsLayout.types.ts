import type { ReactNode, ComponentType } from 'react';

export interface ZeroItemsLayoutProps {
    hint?: string;
    desc?: string;
    iconSize?: number;
    className?: string;
    lightTheme?: boolean;
    children?: ReactNode;
    Icon?: ComponentType;
}

import type { ComponentType } from 'react';

export interface RawRoute {
    id: string;
    path: string;
    title?: string;
    hideInSidebar?: boolean;
    component?: ComponentType;
    icon?: ComponentType;
}

export interface BaseRoute extends RawRoute {
    children?: RawRoute[];
}

import type { ComponentType } from 'react';

interface RawRoute {
    id: string;
    path: string;
    component?: ComponentType;
    icon?: ComponentType;
}

export interface BaseRoute extends RawRoute {
    children?: RawRoute[];
}

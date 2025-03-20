import type { CSSProperties, MouseEventHandler } from 'react';

export type TBaseIconProps = {
    fillColor?: string;
    width?: string | '100%';
    height?: string | '100%';
    style?: CSSProperties;
};

export type TCloseSVGProps = TBaseIconProps & {
    className?: string;
    strokeWidth?: string;
    onClick?: MouseEventHandler<SVGSVGElement> | undefined;
};

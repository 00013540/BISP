import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const HamburgerSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '30px',
    width = '30px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.primary[6];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="none"
            width={width}
            height={height}
            style={style}
            stroke={resolvedColor}
        >
            <path
                d="M3.75 8.75H26.25"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M3.75 15H26.25"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M8.75 21.25L26.25 21.25"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default HamburgerSVG;

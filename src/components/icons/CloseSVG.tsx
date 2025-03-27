import type { FC } from 'react';
import type { TCloseSVGProps } from './types';

import { useTheme } from '@mui/material';

const CloseSVG: FC<TCloseSVGProps> = ({
    style,
    fillColor,
    height = 24,
    width = 24,
    onClick,
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.secondary[5];

    return (
        <svg
            width={width}
            height={height}
            style={style}
            stroke={resolvedColor}
            onClick={onClick}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.66699 2.66699L13.3336 13.3336"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.66643 13.3336L13.333 2.66699"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CloseSVG;

import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ReturnBackSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '16px',
    width = '16px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.white;

    return (
        <svg
            width={width}
            height={height}
            style={style}
            stroke={resolvedColor}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="none"
                d="M5.25391 12.2067H10.5872C12.4272 12.2067 13.9206 10.7134 13.9206 8.87337C13.9206 7.03337 12.4272 5.54004 10.5872 5.54004H3.25391"
                stroke="inherit"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                d="M4.78674 7.20679L3.08008 5.50012L4.78674 3.79346"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ReturnBackSVG;

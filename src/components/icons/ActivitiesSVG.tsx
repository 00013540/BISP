import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ActivitiesSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '24px',
    width = '24px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.primary[6];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            style={style}
            width={width}
            height={height}
            stroke={resolvedColor}
        >
            <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ActivitiesSVG;

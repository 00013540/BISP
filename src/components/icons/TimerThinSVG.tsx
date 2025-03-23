import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const TimerThinSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '24px',
    width = '24px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.primary[6];

    return (
        <svg
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
            width={width}
            height={height}
            stroke={resolvedColor}
            fill="none"
        >
            <path
                d="M38.1006 5H21.9006C12.5006 5 11.7756 13.45 16.8506 18.05L43.1506 41.95C48.2256 46.55 47.5006 55 38.1006 55H21.9006C12.5006 55 11.7756 46.55 16.8506 41.95L43.1506 18.05C48.2256 13.45 47.5006 5 38.1006 5Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default TimerThinSVG;

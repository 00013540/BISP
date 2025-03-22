import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ChevronDownSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '16px',
    width = '16px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.primary[6];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            style={style}
            width={width}
            height={height}
            stroke={resolvedColor}
        >
            <path
                d="M13.2802 5.9668L8.93355 10.3135C8.42021 10.8268 7.58021 10.8268 7.06688 10.3135L2.72021 5.9668"
                stroke="inherit"
                fill="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronDownSVG;

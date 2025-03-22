import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ChevronRightSVG: FC<TBaseIconProps> = ({
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
                d="M5.94043 13.2802L10.2871 8.93355C10.8004 8.42021 10.8004 7.58021 10.2871 7.06688L5.94043 2.72021"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronRightSVG;

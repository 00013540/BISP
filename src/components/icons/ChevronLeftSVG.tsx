import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ChevronLeftSVG: FC<TBaseIconProps> = ({
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
                d="M10.0002 13.2802L5.65355 8.93355C5.14022 8.42021 5.14022 7.58021 5.65355 7.06688L10.0002 2.72021"
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

export default ChevronLeftSVG;

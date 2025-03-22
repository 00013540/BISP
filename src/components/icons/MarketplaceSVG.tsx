import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const MarketplaceSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '24px',
    width = '24px',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.secondary[5];

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
                d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.5 11.5H16.5V13.5"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MarketplaceSVG;

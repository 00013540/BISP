import type { FC } from 'react';
import type { TCloseSVGProps } from './types';

import { useTheme } from '@mui/material';

const ChevronUpSVG: FC<TCloseSVGProps> = ({
    style,
    fillColor,
    height = '24px',
    width = '24px',
    onClick,
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
            onClick={onClick}
        >
            <path
                fill="none"
                d="M2.71979 10.0332L7.06645 5.68654C7.57979 5.1732 8.41978 5.1732 8.93312 5.68654L13.2798 10.0332"
                stroke={resolvedColor}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronUpSVG;

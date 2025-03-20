import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const ErrorSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '100%',
    width = '100%',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.error.main;

    return (
        <svg
            width={width}
            height={height}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            stroke="none"
            fill={resolvedColor}
        >
            <path
                d="M8.00004 14.6667C4.31804 14.6667 1.33337 11.682 1.33337 8.00001C1.33337 4.31801 4.31804 1.33334 8.00004 1.33334C11.682 1.33334 14.6667 4.31801 14.6667 8.00001C14.6667 11.682 11.682 14.6667 8.00004 14.6667ZM7.33337 10V11.3333H8.66671V10H7.33337ZM7.33337 4.66668V8.66668H8.66671V4.66668H7.33337Z"
                stroke="none"
                fill="inherit"
            />
        </svg>
    );
};

export default ErrorSVG;

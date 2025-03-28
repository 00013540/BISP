import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const AccountSVG: FC<TBaseIconProps> = ({
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
                fill="none"
                d="M18.1399 21.6198C17.2599 21.8798 16.2199 21.9998 14.9999 21.9998H8.99986C7.77986 21.9998 6.73986 21.8798 5.85986 21.6198C6.07986 19.0198 8.74986 16.9697 11.9999 16.9697C15.2499 16.9697 17.9199 19.0198 18.1399 21.6198Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fill="none"
                d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AccountSVG;

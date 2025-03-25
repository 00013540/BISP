import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const LocationSVG: FC<TBaseIconProps> = ({
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
            width={width}
            height={height}
            style={style}
            stroke={resolvedColor}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                stroke="inherit"
                fill="none"
                strokeWidth="1.5"
            />
            <path
                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                stroke="inherit"
                fill="none"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default LocationSVG;

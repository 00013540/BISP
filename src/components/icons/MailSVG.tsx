import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const InfoCircleSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = 60,
    width = 60,
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.secondary[2];

    return (
        <svg
            style={style}
            width={width}
            height={height}
            viewBox="0 0 60 60"
            fill="none"
            stroke={resolvedColor}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 15L30.5714 30L49.9999 15M52.5 20.4999V39.4999C52.5 42.3001 52.5005 43.7005 51.9556 44.7701C51.4762 45.7109 50.7103 46.4756 49.7695 46.955C48.6999 47.4999 47.3008 47.5 44.5005 47.5H15.5005C12.7002 47.5 11.2991 47.4999 10.2295 46.955C9.28868 46.4756 8.52433 45.7109 8.04497 44.7701C7.5 43.7005 7.5 42.3001 7.5 39.4999V20.4999C7.5 17.6996 7.5 16.2997 8.04497 15.2301C8.52433 14.2893 9.28868 13.5243 10.2295 13.045C11.2991 12.5 12.7002 12.5 15.5005 12.5H44.5005C47.3008 12.5 48.6999 12.5 49.7695 13.045C50.7103 13.5243 51.4762 14.2893 51.9556 15.2301C52.5005 16.2997 52.5 17.6996 52.5 20.4999Z"
                stroke="inherit"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default InfoCircleSVG;

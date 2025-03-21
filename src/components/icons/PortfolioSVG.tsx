import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const PortfolioSVG: FC<TBaseIconProps> = ({
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
                d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.4802 15.8199L19.7602 16.3899C19.9002 16.6699 20.2502 16.9299 20.5602 16.9899L20.9402 17.0499C22.0802 17.2399 22.3502 18.0799 21.5302 18.9099L21.1802 19.2599C20.9502 19.4999 20.8202 19.9599 20.8902 20.2799L20.9402 20.4899C21.2502 21.8699 20.5202 22.3999 19.3202 21.6799L19.0602 21.5299C18.7502 21.3499 18.2502 21.3499 17.9402 21.5299L17.6802 21.6799C16.4702 22.4099 15.7402 21.8699 16.0602 20.4899L16.1102 20.2799C16.1802 19.9599 16.0502 19.4999 15.8202 19.2599L15.4702 18.9099C14.6502 18.0799 14.9202 17.2399 16.0602 17.0499L16.4402 16.9899C16.7402 16.9399 17.1002 16.6699 17.2402 16.3899L17.5202 15.8199C18.0602 14.7299 18.9402 14.7299 19.4802 15.8199Z"
                fill="none"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PortfolioSVG;

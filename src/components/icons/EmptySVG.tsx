import type { FC } from 'react';
import { useTheme } from '@mui/material';

import type { TBaseIconProps } from './types';

const EmptySVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = 46,
    width = 55,
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.primary[6];
    const secondaryColor = theme.palette.secondary['6'];

    return (
        <svg
            width={width}
            height={height}
            style={style}
            viewBox="0 0 58 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M26.9719 18.8011V47.4994H6.68945V25.4868L21.3764 14.686L26.9719 18.8011Z"
                stroke={secondaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M51.312 1.5H26.9727V47.5H51.312V1.5Z"
                stroke={resolvedColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.7363 17.9702L35.9906 25.677V47.5002H27.1713"
                stroke={secondaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.5 47.5H56.5"
                stroke={secondaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default EmptySVG;

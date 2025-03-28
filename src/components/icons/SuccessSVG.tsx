import type { FC } from 'react';
import type { TBaseIconProps } from './types';

import { useTheme } from '@mui/material';

const SuccessSVG: FC<TBaseIconProps> = ({
    style,
    fillColor,
    height = '100%',
    width = '100%',
}) => {
    const theme = useTheme();

    const resolvedColor = fillColor || theme.palette.success.main;

    return (
        <svg
            width={width}
            height={height}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill={resolvedColor}
        >
            <path
                stroke="none"
                d="M8.00004 14.6667C4.31804 14.6667 1.33337 11.682 1.33337 8.00001C1.33337 4.31801 4.31804 1.33334 8.00004 1.33334C11.682 1.33334 14.6667 4.31801 14.6667 8.00001C14.6667 11.682 11.682 14.6667 8.00004 14.6667ZM7.22937 10.99L11.9427 6.27601L11 5.33334L7.22937 9.10468L5.34337 7.21868L4.40071 8.16134L7.22937 10.99Z"
                fill="inherit"
            />
        </svg>
    );
};

export default SuccessSVG;

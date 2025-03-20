import type { ReactNode } from 'react';
import type { LinkProps as MuiLinkProps, SxProps, Theme } from '@mui/material';

export interface CustomLinkProps extends MuiLinkProps {
    external?: boolean;
    children: ReactNode;
    to?: string;
    sideEffect?: () => void;
    disabled?: boolean;
    size?: 'large' | 'medium';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    sxIcon?: SxProps<Theme>;
}

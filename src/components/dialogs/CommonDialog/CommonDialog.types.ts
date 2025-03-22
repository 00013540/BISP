import { type ReactNode } from 'react';
import { TypographyProps, SxProps, Theme } from '@mui/material';

export type CommonDialogProps = {
    isHidden: boolean;
    title: string;
    children: ReactNode;
    persistent?: boolean;
    maxWidth?: number | string | null;
    onClose: () => void;
    HeaderActionSlot?: ReactNode;
    open?: boolean;
    titleProps?: TypographyProps;
    sxTitleContainer?: SxProps<Theme>;
    isSubmitting?: boolean;
};

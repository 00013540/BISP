import { type FC } from 'react';
import { Box, Typography } from '@mui/material';

import { useIsDesktop } from '@/hooks';
import { CloseSVG } from '@/components/icons';

import { type CommonDialogProps } from './CommonDialog.types';
import {
    DialogStyled,
    DialogTitleStyled,
    DialogTitleInnerStyled,
    DialogContentStyled,
    IconButtonStyled,
} from './CommonDialog.styled';

const CommonDialog: FC<CommonDialogProps> = ({
    title,
    children,
    maxWidth = 538,
    onClose,
    HeaderActionSlot,
    open = true,
    persistent = false,
    titleProps,
    sxTitleContainer = {},
    isHidden,
}) => {
    const isDesktop = useIsDesktop();

    const paperStyles = {
        visibility: isHidden ? 'hidden' : 'initial',
        '& .MuiPaper-root': { maxWidth },
    };

    const titleVariant = isDesktop ? 'h4' : 'h5';

    const handleClose = () => {
        onClose();
    };

    return (
        <DialogStyled
            open={open}
            fullWidth
            sx={paperStyles}
            onClose={handleClose}
        >
            <DialogTitleStyled>
                <DialogTitleInnerStyled sx={sxTitleContainer}>
                    <Typography
                        variant={titleVariant}
                        color="text.highlight"
                        {...titleProps}
                    >
                        {title}
                    </Typography>
                    <Box>
                        {HeaderActionSlot}
                        {!persistent && (
                            <IconButtonStyled onClick={handleClose}>
                                <CloseSVG />
                            </IconButtonStyled>
                        )}
                    </Box>
                </DialogTitleInnerStyled>
            </DialogTitleStyled>

            <DialogContentStyled>{children}</DialogContentStyled>
        </DialogStyled>
    );
};

export default CommonDialog;

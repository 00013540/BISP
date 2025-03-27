import React from 'react';
import { Box, Typography } from '@mui/material';

import { useIsMobile } from '@/hooks';
import { MailSVG } from '@/components/icons';

import type { EmailSentProps } from './EmailSent.types';
import { ButtonStyled } from './EmailSent.styled';

const EmailSent: React.FC<EmailSentProps> = ({
    title,
    description,
    buttonText,
    footer,
    onClick,
    isLoading,
}) => {
    const isMobile = useIsMobile();
    const titleVariant = isMobile ? 'h3' : 'h2';

    const resolvedTitle = title ?? 'Check Your Email';
    const resolvedDescription =
        description ??
        "We've sent instructions to reset your password to the email address associated with your account.";
    const resolvedButtonText = buttonText ?? 'Resend Email';
    const resolvedFooter =
        footer ?? "If you didn't receive the email, click the button above.";

    return (
        <div>
            <Box display="flex" alignItems="center" justifyContent="center">
                <MailSVG />
            </Box>
            <Typography
                variant={titleVariant}
                align="center"
                color="text.highlight"
                sx={{ my: 4 }}
            >
                {resolvedTitle}
            </Typography>
            <Typography align="center">{resolvedDescription}</Typography>

            <ButtonStyled
                fullWidth
                variant="contained"
                onClick={() => onClick()}
                loading={isLoading}
            >
                {resolvedButtonText}
            </ButtonStyled>

            <Typography variant="body2" align="center" color="text.secondary">
                {resolvedFooter}
            </Typography>
        </div>
    );
};

export default EmailSent;

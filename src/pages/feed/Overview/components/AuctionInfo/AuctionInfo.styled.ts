import { Box, styled } from '@mui/material';

export const ParticipantBoxStyled = styled(Box)(() => ({
    padding: '1rem',
    borderRadius: '0.5rem',
    border: `1.5px solid rgb(245, 245, 245)`,
    width: '100%',
}));

export const ParticipantImageStyled = styled('img')(() => ({
    height: '30px',
    width: '30px',
    borderRadius: '50%',
}));

export const ParticipantWrapperStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
}));

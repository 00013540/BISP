import { Box, Typography, Chip, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    borderRadius: '1rem',
    padding: '0.5rem',
    position: 'relative',
    cursor: 'pointer',
    border: '1.5px solid rgb(245, 245, 245)',
    boxShadow: 'rgba(0, 192, 174, 0.14) 2px 4px 18px 0px',
    backgroundColor: theme.palette.white,
}));

export const ChipStyled = styled(Chip)(() => ({
    position: 'absolute',
    top: '1rem',
    left: '1rem',
}));

export const ImageStyled = styled('img')(() => ({
    height: '170px',
    width: '100%',
    borderRadius: '1rem',
    objectFit: 'cover',
}));

export const ContentStyled = styled(Box)(() => ({
    flex: 1,
    padding: '1rem 0.625rem',
}));

export const TypographyStyled = styled(Typography)(() => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
}));

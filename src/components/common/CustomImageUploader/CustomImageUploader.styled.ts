import { styled } from '@mui/material';

export const FileInputStyled = styled('input')(() => ({
    display: 'none',
}));

export const LabelStyled = styled('label', {
    shouldForwardProp: (prop: string) => prop !== 'preview',
})<{ preview: null | string }>(({ theme, preview }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.gray['4'],
    border: !preview ? `1px dashed ${theme.palette.gray['5']}` : 'none',
}));

export const ImageStyled = styled('img')(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectPosition: 'center',
    borderRadius: '8px',
}));

export const PlusStyled = styled('span')(({ theme }) => ({
    fontSize: '24px',
    color: theme.palette.text.primary,
}));

export const XStyled = styled('span')(({ theme }) => ({
    fontSize: '20px',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    lineHeight: 1,
    height: '20px',
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
}));

export const HelperText = styled('span', {
    shouldForwardProp: (prop: string) => prop !== 'error',
})<{ error: boolean }>`
    color: ${({ error, theme }) =>
        error ? theme.palette.error.main : 'inherit'};
`;

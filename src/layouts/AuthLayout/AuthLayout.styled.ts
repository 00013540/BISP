import { alpha, Box, styled } from '@mui/material';

export const WrapperStyled = styled(Box)(() => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
}));

export const LeftWrapperStyled = styled(Box)(() => ({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const RightWrapperStyled = styled(Box)(() => ({
    width: '50%',
    minHeight: '100vh',
    padding: '30px',
}));

export const BoxStyled = styled(Box)(({ theme }) => ({
    height: '100%',
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: '30px',

    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.7)} 0%, ${alpha(theme.palette.primary.main, 0)} 20%, ${alpha(theme.palette.primary.main, 0)} 80%, ${alpha(theme.palette.primary.main, 0.7)} 100%)`,
    },
}));

export const AuthBannerVideo = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,

    '& video': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        mixBlendMode: 'screen',
    },
}));

export const AuthBannerImage = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'imageUrl',
})<{ imageUrl: string }>(({ imageUrl }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'grayscale(50%)',
    zIndex: 1,
}));

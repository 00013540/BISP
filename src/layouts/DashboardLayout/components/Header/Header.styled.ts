import { Card, styled } from '@mui/material';

import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, HEADER_Z_INDEX } from '@/theme';

export const HeaderContainer = styled(Card)(({ theme }) => ({
    height: `${HEADER_HEIGHT}px`,
    backgroundColor: theme.palette.white,
    borderBottom: `1.5px solid ${theme.palette.gray['3']}`,
    borderRadius: 0,
    padding: theme.spacing(0, 6),
    paddingRight: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: HEADER_Z_INDEX,

    [theme.breakpoints.down('sm')]: {
        height: `${HEADER_HEIGHT_MOBILE}px`,
        padding: theme.spacing(0, 2, 0, 4),
    },
}));

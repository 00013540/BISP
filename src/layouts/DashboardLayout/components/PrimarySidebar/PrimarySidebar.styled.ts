import {
    Box,
    Paper,
    List,
    styled,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
} from '@mui/material';
import {
    HEADER_HEIGHT,
    HEADER_HEIGHT_MOBILE,
    SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_TABLET,
    SIDEBAR_HEADER_HEIGHT,
} from '@/theme';

const shouldForwardProp = (prop: string) => prop !== 'isOpen';

export const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
    minWidth: '2.125rem',
    transition: 'all 0.2s ease-out',

    '&  svg': {
        stroke: theme.palette.secondary['5'],
    },

    '&.collapsed': {
        rotate: '-180deg',
    },
}));

export const ListItemText = styled(MuiListItemText)(({ theme }) => ({
    margin: 0,
    span: {
        color: theme.palette.secondary['5'],
        fontSize: '1rem',
        fontWeight: '500',
    },
}));

export const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
    padding: '1rem 1.875rem',
    transition: 'all 0.2s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .MuiTypography-root': {
        transition: 'all 0.2s',
    },
    '& .MuiListItemIcon-root svg': {
        transition: 'all 0.2s',
    },

    '&.active': {
        '&:after': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '5px',
            height: '100%',
            backgroundColor: theme.palette.primary['6'],
            margin: 0,
            borderRadius: 0,
        },
        '&.isNestedRoute:after': {
            display: 'none',
        },
        '&.isParentRoute .MuiTypography-root': {
            color: theme.palette.secondary['5'],
        },
        '&.isParentRoute .MuiListItemIcon-root svg': {
            stroke: theme.palette.secondary['5'],
        },
        '& .MuiTypography-root': {
            color: theme.palette.primary['6'],
        },
        '& .MuiListItemIcon-root svg': {
            fill: theme.palette.primary['6'],
            stroke: theme.palette.primary['6'],
        },
    },

    '&:hover': {
        backgroundColor: theme.palette.gray['2'],

        '& .MuiTypography-root': {
            color: theme.palette.primary['6'],
        },
        '& .MuiListItemIcon-root svg': {
            fill: theme.palette.primary['6'],
            stroke: theme.palette.primary['6'],
        },
    },

    '&:active': {
        backgroundColor: theme.palette.gray['2'],

        '& .MuiTypography-root': {
            color: theme.palette.primary['7'],
        },
        '& .MuiListItemIcon-root svg': {
            fill: theme.palette.primary['7'],
            stroke: theme.palette.primary['7'],
        },
    },
}));

export const PrimarySidebarHeaderWrapper = styled(Box)(() => ({
    padding: '0 1.875rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `${SIDEBAR_HEADER_HEIGHT}px`,
}));

export const PrimarySidebarMenuWrapper = styled(List)(({ theme }) => ({
    maxHeight: `calc(100vh - ${SIDEBAR_HEADER_HEIGHT}px)`,
    height: '100%',
    padding: 0,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    // Hide scrollbar for IE, Edge, and Firefox
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',

    [theme.breakpoints.down('lg')]: {
        maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    },

    [theme.breakpoints.down('sm')]: {
        maxHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE}px)`,
    },
}));

export const PrimarySidebarContainer = styled(Paper, { shouldForwardProp })<{
    isOpen: boolean;
}>(({ theme, isOpen }) => ({
    height: '100%',
    maxHeight: '100vh',
    width: `${SIDEBAR_WIDTH}px`,
    backgroundColor: theme.palette.white,
    position: 'fixed',
    top: 0,
    zIndex: 10,
    borderRadius: 0,
    transition: 'all 0.3s ease-out',

    [theme.breakpoints.up('lg')]: {
        left: 0,
    },

    [theme.breakpoints.down('lg')]: {
        top: `${HEADER_HEIGHT}px`,
        left: isOpen ? 0 : `-${SIDEBAR_WIDTH_TABLET}px`,
        maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        width: `${SIDEBAR_WIDTH_TABLET}px`,
    },

    [theme.breakpoints.down('sm')]: {
        top: `${HEADER_HEIGHT_MOBILE}px`,
        left: isOpen ? 0 : '-100%',
        maxHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE}px)`,
        width: '100%',
    },
}));

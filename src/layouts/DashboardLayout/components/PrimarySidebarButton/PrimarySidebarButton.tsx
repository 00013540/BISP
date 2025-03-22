import type { FC } from 'react';
import { useNavigate } from 'react-router';
import { Box } from '@mui/material';

import { ChevronDownSVG } from '@/components/icons';
import { doSignOut } from '@/firebase/auth.ts';

import type { PrimarySidebarCategoryProps } from '../PrimarySidebar/PrimarySidebar.types';
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '../PrimarySidebar/PrimarySidebar.styled';

const PrimarySidebarButton: FC<PrimarySidebarCategoryProps> = ({
    id,
    className,
    name,
    to,
    icon,
    closeSidebars,
    updateActiveCollapseId,
    collapsable = false,
    isCollapseOpen = false,
}) => {
    const navigate = useNavigate();
    const IconTag = icon!;

    const handleLogout = () => {
        doSignOut();
    };

    const onClick = (to?: string) => {
        if (closeSidebars) closeSidebars();

        if (id === 'logout') return handleLogout();

        if (updateActiveCollapseId) updateActiveCollapseId(id);

        if (to) setTimeout(() => navigate(to), 0);
    };

    return (
        <ListItemButton
            dense
            className={`${className}`}
            onClick={() => onClick(to)}
        >
            <Box display="flex" alignItems="center">
                <ListItemIcon>{icon && <IconTag />}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
            </Box>
            {collapsable && (
                <ListItemIcon
                    className={(isCollapseOpen && 'collapsed') || ''}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        minWidth: 0,
                    }}
                >
                    <ChevronDownSVG />
                </ListItemIcon>
            )}
        </ListItemButton>
    );
};

export default PrimarySidebarButton;

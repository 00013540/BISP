import { useState } from 'react';
import { Outlet } from 'react-router';
import { Backdrop } from '@mui/material';

import { LAYOUT_BACKDROP_Z_INDEX } from '@/theme';
import { useIsTabletOrMobile } from '@/hooks';

import { Header, PrimarySidebar } from './components';
import { LayoutContentContainer } from './DashboardLayout.styled';

const DashboardLayout = () => {
    const isTabletOrMobileView = useIsTabletOrMobile();

    const [isPrimarySidebarOpen, setIsPrimarySidebarOpen] = useState(false);

    const closeSidebars = () => {
        setIsPrimarySidebarOpen(false);
    };

    return (
        <>
            <PrimarySidebar
                isOpen={isPrimarySidebarOpen}
                closeSidebars={closeSidebars}
            />
            <Backdrop
                sx={{ zIndex: LAYOUT_BACKDROP_Z_INDEX }}
                open={isPrimarySidebarOpen}
                onClick={closeSidebars}
            />

            <LayoutContentContainer>
                <Outlet />
            </LayoutContentContainer>

            {isTabletOrMobileView && (
                <Header
                    isOpen={isPrimarySidebarOpen}
                    setIsOpen={setIsPrimarySidebarOpen}
                />
            )}
        </>
    );
};

export default DashboardLayout;

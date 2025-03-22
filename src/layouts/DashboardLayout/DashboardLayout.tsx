import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { Backdrop } from '@mui/material';

import { useUser } from '@/context/user-context';
import { LAYOUT_BACKDROP_Z_INDEX } from '@/theme';
import { useIsTabletOrMobile } from '@/hooks';
import { Loader } from '@/components/common';

import { Header, PrimarySidebar } from './components';
import { LayoutContentContainer } from './DashboardLayout.styled';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const isTabletOrMobileView = useIsTabletOrMobile();
    const { loading } = useUser();

    const [isPrimarySidebarOpen, setIsPrimarySidebarOpen] = useState(false);

    const closeSidebars = () => {
        setIsPrimarySidebarOpen(false);
    };

    if (loading) return <Loader size="6rem" centered />;

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

            <LayoutContentContainer>{children}</LayoutContentContainer>

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

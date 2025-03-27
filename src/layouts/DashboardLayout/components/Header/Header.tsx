import type { FC } from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router';

import { useIsMobile } from '@/hooks/useIsMobile';
import { HamburgerSVG } from '@/components/icons';
import { BrandLogo } from '@/components/common';

import type { HeaderProps } from './Header.types';
import { HeaderContainer } from './Header.styled';

const Header: FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
    const isMobileView = useIsMobile();

    return (
        <HeaderContainer>
            <Link to="/">
                <BrandLogo height={isMobileView ? '1.5rem' : '1.875rem'} />
            </Link>
            <IconButton
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <HamburgerSVG
                    height={isMobileView ? '1.5rem' : '1.875rem'}
                    width={isMobileView ? '1.5rem' : '1.875rem'}
                    style={{ cursor: 'pointer' }}
                />
            </IconButton>
        </HeaderContainer>
    );
};

export default Header;

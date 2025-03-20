import { Outlet } from 'react-router';

import { useIsDesktop } from '@/hooks';

import {
    WrapperStyled,
    LeftWrapperStyled,
    RightWrapperStyled,
    AuthBannerVideo,
    BoxStyled,
    AuthBannerImage,
} from './AuthLayout.styled.ts';

const AuthLayout = () => {
    const isDesktop = useIsDesktop();

    return (
        <WrapperStyled>
            <LeftWrapperStyled sx={{ width: isDesktop ? '50%' : '100%' }}>
                <Outlet />
            </LeftWrapperStyled>
            {isDesktop && (
                <RightWrapperStyled>
                    <BoxStyled>
                        <AuthBannerVideo>
                            <video autoPlay loop muted playsInline>
                                <source src="/clouds.webm" type="video/webm" />
                                <source src="/clouds.mp4" type="video/mp4" />
                            </video>
                        </AuthBannerVideo>
                        <AuthBannerImage imageUrl="/auth-banner.webp" />
                    </BoxStyled>
                </RightWrapperStyled>
            )}
        </WrapperStyled>
    );
};

export default AuthLayout;

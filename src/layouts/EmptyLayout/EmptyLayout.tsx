import { Outlet } from 'react-router';

import { WrapperStyled } from './EmptyLayout.styled.ts';

const EmptyLayout = () => {
    return (
        <WrapperStyled>
            <Outlet />
        </WrapperStyled>
    );
};

export default EmptyLayout;

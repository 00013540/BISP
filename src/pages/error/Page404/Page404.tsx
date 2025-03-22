import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

import { ReturnBackSVG } from '@/components/icons';

import {
    PageWrapperStyled,
    PageBoxStyled,
    ButtonStyled,
} from './Page404.styled';

const Page404 = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    };

    return (
        <PageWrapperStyled>
            <PageBoxStyled>
                <Typography fontSize="4rem" color="#C4C5C5" variant="h1" mb={2}>
                    404
                </Typography>
                <Typography variant="body1" color="text.primary" mb={2}>
                    Page not found
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={7.5}>
                    The page you are looking for might have been removed
                </Typography>
                <ButtonStyled onClick={onClick}>
                    <span style={{ lineHeight: 1, marginRight: '0.625rem' }}>
                        Return to website
                    </span>
                    <ReturnBackSVG />
                </ButtonStyled>
            </PageBoxStyled>
        </PageWrapperStyled>
    );
};

export default Page404;

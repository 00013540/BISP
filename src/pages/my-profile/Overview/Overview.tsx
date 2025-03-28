import { useMemo, useState } from 'react';
import { Grid2, Box, Typography, Button } from '@mui/material';

import { useUser } from '@/context/user-context';
import { Loader } from '@/components/common';

import { UpdateUserInfoDialog } from './components';
import {
    WrapperStyled,
    ImageStyled,
    WrapperLoaderStyled,
} from './Overview.styled.ts';

const Overview = () => {
    const { currentUser, loading: isLoading } = useUser();

    const [isOpen, setIsOpen] = useState(false);

    const updateData = useMemo(() => {
        return {
            uid: currentUser?.uid || '',
            firstName: currentUser?.firstName || '',
            lastName: currentUser?.lastName || '',
            phoneNumber: currentUser?.phoneNumber || '',
            image: currentUser?.image || '',
            imageStoragePath: currentUser?.imageStoragePath || '',
        };
    }, [currentUser]);

    return (
        <WrapperStyled>
            {isLoading && (
                <WrapperLoaderStyled>
                    <Loader size={60} />
                </WrapperLoaderStyled>
            )}
            {!isLoading && (
                <Grid2 container spacing={10}>
                    <Grid2 size={{ xs: 12, sm: 6, md: 5, lg: 4 }}>
                        <ImageStyled src={currentUser?.image || '/user.png'} />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6, md: 7, lg: 8 }}>
                        <Box mb={4}>
                            <Typography variant="h5" color="text.highlight">
                                First name:
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {currentUser?.firstName}
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant="h5" color="text.highlight">
                                Last name:
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {currentUser?.lastName}
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant="h5" color="text.highlight">
                                Email:
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {currentUser?.email}
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant="h5" color="text.highlight">
                                Phone:
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                {currentUser?.phoneNumber}
                            </Typography>
                        </Box>
                        <Button onClick={() => setIsOpen(true)}>Update</Button>
                    </Grid2>
                </Grid2>
            )}
            <UpdateUserInfoDialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                updateData={updateData}
            />
        </WrapperStyled>
    );
};

export default Overview;

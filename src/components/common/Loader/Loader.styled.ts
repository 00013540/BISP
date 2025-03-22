import { CircularProgress, Box, styled } from '@mui/material';
import { spacing } from '@mui/system';

export const LoaderProgress = styled(CircularProgress)(spacing);

export const LoaderContainer = styled(Box)(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    minHeight: '100%',
    minWidth: '100%',
    overflowY: 'hidden',
}));

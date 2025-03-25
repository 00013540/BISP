import { useState } from 'react';
import { Box, Button, Grid2, Typography } from '@mui/material';

import { useIsMobile } from '@/hooks';
import { CustomLink } from '@/components/common';
import { HeartFilledSVG, HeartSVG } from '@/components/icons';

import {
    ParticipantBoxStyled,
    ParticipantImageStyled,
    ParticipantWrapperStyled,
} from './AuctionInfo.styled.ts';
import { PlaceBidDialog } from '../PlaceBidDialog';

const AuctionInfo = () => {
    const isMobile = useIsMobile();

    const [isBidDialogOpen, setIsBidDialogOpen] = useState(false);

    return (
        <>
            <Box>
                <Typography variant="h3" color="text.highlight" mb={2}>
                    This auction is ended
                </Typography>
            </Box>
            <Grid2 container spacing={4} mb={4}>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Participants
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            10
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Total bids
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            10
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Current Bid
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            10
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
                <Grid2 size={{ xs: 6, sm: 3 }}>
                    <ParticipantBoxStyled>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={1}
                        >
                            Duration
                        </Typography>
                        <Typography variant="h3" color="text.highlight">
                            00:50:50
                        </Typography>
                    </ParticipantBoxStyled>
                </Grid2>
            </Grid2>

            <Typography variant="h5" color="text.highlight" mb={2}>
                Latest 5 bids:
            </Typography>
            <ParticipantWrapperStyled mb={4}>
                {[1, 2, 3, 4, 5].map((id) => (
                    <Box
                        key={id}
                        display="flex"
                        alignItems="center"
                        columnGap={2}
                    >
                        <ParticipantImageStyled
                            src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                            alt="Photo"
                        />
                        <Typography>Jakhongirmirzo Tursunaliev: 5</Typography>
                    </Box>
                ))}
            </ParticipantWrapperStyled>

            <Box
                display="flex"
                flexWrap="wrap"
                gap={4}
                mb={4}
                flexDirection={isMobile ? 'column' : 'row'}
            >
                <Button
                    variant="outlined"
                    startIcon={<HeartSVG height="1rem" width="1rem" />}
                >
                    Add to favorite
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<HeartFilledSVG height="1rem" width="1rem" />}
                >
                    Remove from favorite
                </Button>
                <Button onClick={() => setIsBidDialogOpen(true)}>
                    Place a bid
                </Button>
            </Box>

            <Box>
                <Typography variant="h3" color="text.highlight" mb={2}>
                    Congratulation you won in this auction
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    flexWrap="wrap"
                    mb={2}
                >
                    <Typography variant="h5" color="text.primary">
                        Contact info of current owner:
                    </Typography>
                    <CustomLink type="tel" to="tel:998951502301">
                        +998951502301
                    </CustomLink>
                </Box>
                <Button>Claim bid transaction</Button>
            </Box>
            <PlaceBidDialog
                isOpen={isBidDialogOpen}
                setIsOpen={setIsBidDialogOpen}
            />
        </>
    );
};

export default AuctionInfo;

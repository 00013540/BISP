import { Box, Button } from '@mui/material';

import { ItemStatus } from '@/dataAccess/types';

import { CustomCardProps } from './CustomCard.types.ts';
import {
    WrapperStyled,
    ChipStyled,
    ImageStyled,
    ContentStyled,
    TypographyStyled,
} from './CustomCard.styled.ts';

const CustomCard = ({
    uid,
    title,
    description,
    address,
    image,
    status,
    imageStoragePath,
    category,
    ownerUid,
    onDelete,
    onUpdate,
    onActivate,
}: CustomCardProps) => {
    const handleDelete = () => {
        if (onDelete) {
            onDelete(uid, imageStoragePath);
        }
    };

    const handleUpdate = () => {
        if (onUpdate) {
            onUpdate({
                uid,
                title,
                description,
                address,
                image,
                imageStoragePath,
                category,
                ownerUid,
            });
        }
    };

    const handleActivate = () => {
        if (onActivate) {
            onActivate(uid);
        }
    };

    return (
        <WrapperStyled>
            <ChipStyled label={status} color="success" />
            <ImageStyled src={image} alt="Image" />
            <ContentStyled>
                <TypographyStyled variant="h5" color="text.primary" mb={1}>
                    {title}
                </TypographyStyled>
                <TypographyStyled variant="body1" color="text.secondary" mb={4}>
                    {description}
                </TypographyStyled>
                <TypographyStyled variant="body1" color="text.secondary" mb={2}>
                    {address}
                </TypographyStyled>
                <Box display="flex" flexWrap="nowrap" columnGap={2}>
                    {status !== ItemStatus.ACTIVE && (
                        <Button
                            size="medium"
                            variant="outlined"
                            color="error"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    )}
                    <Button
                        size="medium"
                        variant="outlined"
                        color="primary"
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                    {status !== ItemStatus.ACTIVE && (
                        <Button
                            size="medium"
                            variant="contained"
                            color="primary"
                            onClick={handleActivate}
                        >
                            Activate
                        </Button>
                    )}
                </Box>
            </ContentStyled>
        </WrapperStyled>
    );
};

export default CustomCard;

import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
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
    ownerPhone,
    hasActions,
    onDelete,
    onUpdate,
    onActivate,
}: CustomCardProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate(`/feed/${uid}`);

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        if (onDelete) {
            e.preventDefault();
            e.stopPropagation();
            onDelete(uid, imageStoragePath);
        }
    };

    const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
        if (onUpdate) {
            e.preventDefault();
            e.stopPropagation();
            onUpdate({
                uid,
                title,
                description,
                address,
                image,
                imageStoragePath,
                category,
                ownerUid,
                ownerPhone,
            });
        }
    };

    const handleActivate = (e: MouseEvent<HTMLButtonElement>) => {
        if (onActivate) {
            e.preventDefault();
            e.stopPropagation();
            onActivate({ uid });
        }
    };

    return (
        <WrapperStyled onClick={handleNavigate}>
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
                {hasActions && (
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
                )}
            </ContentStyled>
        </WrapperStyled>
    );
};

export default CustomCard;

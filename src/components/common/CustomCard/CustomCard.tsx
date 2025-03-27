import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Button } from '@mui/material';

import { useUser } from '@/context/user-context';
import { ItemStatus, ItemType } from '@/dataAccess/types';
import { HeartSVG, HeartFilledSVG } from '@/components/icons';
import { useAddToFavorite, useRemoveFromFavorite } from '@/dataAccess/hooks';

import { CustomCardProps } from './CustomCard.types.ts';
import {
    ChipStyled,
    ContentStyled,
    ImageStyled,
    TypographyStyled,
    WrapperStyled,
    FavoriteWrapperStyled,
} from './CustomCard.styled.ts';

const CustomCard = ({
    uid,
    title,
    description,
    address,
    image,
    status,
    type,
    imageStoragePath,
    category,
    ownerUid,
    hasActions,
    showFavoriteIcon,
    onDelete,
    onUpdate,
    onActivate,
}: CustomCardProps) => {
    const navigate = useNavigate();

    const { currentUser, favoriteItems } = useUser();
    const { mutate: mutateAddToFavorite } = useAddToFavorite();
    const { mutate: mutateRemoveFromFavorite } = useRemoveFromFavorite();

    const canControlFavorite = currentUser?.uid !== ownerUid;
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    useEffect(() => {
        if (currentUser) {
            const isHeartFilledItem = favoriteItems[uid];
            setIsHeartFilled(isHeartFilledItem);
        }
    }, [currentUser, favoriteItems, uid]);

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

    const handleFavorite = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (isHeartFilled) {
            setIsHeartFilled(false);
            if (currentUser) {
                mutateRemoveFromFavorite({
                    refToUserUid: currentUser.uid,
                    refToItem: uid,
                });
            }
        } else {
            setIsHeartFilled(true);
            if (currentUser) {
                mutateAddToFavorite({
                    refToUserUid: currentUser.uid,
                    refToItem: uid,
                });
            }
        }
    };

    return (
        <WrapperStyled onClick={handleNavigate}>
            <ChipStyled
                label={type === ItemType.FIRST_BID ? 'First bid' : 'Auction'}
                color="success"
            />
            {showFavoriteIcon && canControlFavorite && (
                <FavoriteWrapperStyled onClick={handleFavorite}>
                    {isHeartFilled ? (
                        <HeartFilledSVG height="1rem" width="1rem" />
                    ) : (
                        <HeartSVG height="1rem" width="1rem" />
                    )}
                </FavoriteWrapperStyled>
            )}
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
                        {status !== ItemStatus.CLAIMED && (
                            <Button
                                size="medium"
                                variant="outlined"
                                color="error"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        )}
                        {status !== ItemStatus.CLAIMED && (
                            <Button
                                size="medium"
                                variant="outlined"
                                color="primary"
                                onClick={handleUpdate}
                            >
                                Update
                            </Button>
                        )}

                        {status === ItemStatus.NEW && (
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

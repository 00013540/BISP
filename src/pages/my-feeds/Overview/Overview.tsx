import { useState } from 'react';
import { Button, Grid2 } from '@mui/material';

import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard } from '@/components/common';

import { CreateFeedDialog, DeleteFeedDialog } from './components';
import { WrapperStyled, ContentWrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [isOpenCreateDialog, setIsOpenCreateDialog] = useState(false);
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
    const [deleteData, setDeleteData] = useState({
        uid: '',
        imageStoragePath: '',
    });

    const { data } = useGetItems();

    const handleDelete = (uid: string, imageStoragePath: string) => {
        setDeleteData({
            uid,
            imageStoragePath,
        });
        setIsOpenDeleteDialog(true);
    };

    const handleUpdate = () => {};

    const handleActivate = () => {};

    return (
        <WrapperStyled>
            <ContentWrapperStyled mb={4}>
                <Button onClick={() => setIsOpenCreateDialog(true)}>
                    New feed
                </Button>
            </ContentWrapperStyled>
            <Grid2 container spacing={2}>
                {data?.map(
                    ({
                        uid,
                        title,
                        description,
                        address,
                        image,
                        imageStoragePath,
                        status,
                    }) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <CustomCard
                                key={uid}
                                uid={uid}
                                title={title}
                                description={description}
                                address={address}
                                image={image}
                                status={status}
                                imageStoragePath={imageStoragePath}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                                onActivate={handleActivate}
                            />
                        </Grid2>
                    )
                )}
            </Grid2>
            <CreateFeedDialog
                isOpen={isOpenCreateDialog}
                setIsOpen={setIsOpenCreateDialog}
            />
            <DeleteFeedDialog
                isOpen={isOpenDeleteDialog}
                setIsOpen={setIsOpenDeleteDialog}
                deleteData={deleteData}
            />
        </WrapperStyled>
    );
};

export default Overview;

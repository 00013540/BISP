import { useState } from 'react';
import { Button, Grid2 } from '@mui/material';

import { UpdateItemData } from '@/dataAccess/types';
import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard } from '@/components/common';

import {
    ActivateFeedDialog,
    CreateFeedDialog,
    UpdateFeedDialog,
    DeleteFeedDialog,
} from './components';
import { WrapperStyled, ContentWrapperStyled } from './Overview.styled.ts';
import { useUser } from '@/context/user-context';

const Overview = () => {
    const [isOpenActivateDialog, setIsOpenActivateDialog] = useState(false);
    const [isOpenCreateDialog, setIsOpenCreateDialog] = useState(false);
    const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
    const [activateData, setActivateData] = useState({
        uid: '',
    });
    const [deleteData, setDeleteData] = useState({
        uid: '',
        imageStoragePath: '',
    });
    const [updateData, setUpdateData] = useState<UpdateItemData>({
        uid: '',
        title: '',
        description: '',
        image: '',
        imageStoragePath: '',
        address: '',
        category: '',
        ownerUid: '',
        ownerPhone: '',
    });

    const { currentUser } = useUser();
    const { data } = useGetItems({
        ownerUid: currentUser?.uid || null,
    });

    const handleDelete = (uid: string, imageStoragePath: string) => {
        setDeleteData({
            uid,
            imageStoragePath,
        });
        setIsOpenDeleteDialog(true);
    };

    const handleUpdate = (updateData: UpdateItemData) => {
        setUpdateData(updateData);
        setIsOpenUpdateDialog(true);
    };

    const handleActivate = (activateData: { uid: string }) => {
        setActivateData(activateData);
        setIsOpenActivateDialog(true);
    };

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
                        category,
                        address,
                        image,
                        imageStoragePath,
                        status,
                        ownerUid,
                        ownerPhone,
                    }) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <CustomCard
                                hasActions
                                key={uid}
                                uid={uid}
                                title={title}
                                description={description}
                                category={category}
                                address={address}
                                image={image}
                                status={status}
                                imageStoragePath={imageStoragePath}
                                ownerUid={ownerUid}
                                ownerPhone={ownerPhone}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                                onActivate={handleActivate}
                            />
                        </Grid2>
                    )
                )}
            </Grid2>
            <ActivateFeedDialog
                isOpen={isOpenActivateDialog}
                setIsOpen={setIsOpenActivateDialog}
                activateData={activateData}
            />
            <CreateFeedDialog
                isOpen={isOpenCreateDialog}
                setIsOpen={setIsOpenCreateDialog}
            />
            <DeleteFeedDialog
                isOpen={isOpenDeleteDialog}
                setIsOpen={setIsOpenDeleteDialog}
                deleteData={deleteData}
            />
            <UpdateFeedDialog
                isOpen={isOpenUpdateDialog}
                setIsOpen={setIsOpenUpdateDialog}
                updateData={updateData}
            />
        </WrapperStyled>
    );
};

export default Overview;

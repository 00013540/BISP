import { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import { useSearchParams } from 'react-router';

import { useGetItems } from '@/dataAccess/hooks';
import { CustomCard, Loader, ZeroItemsLayout } from '@/components/common';
import { useUser } from '@/context/user-context';
import { ItemStatus, UpdateItemData } from '@/dataAccess/types';

import {
    ActivateFeedDialog,
    CreateFeedDialog,
    UpdateFeedDialog,
    DeleteFeedDialog,
    Filters,
} from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const statusParam = searchParams.get('status')?.toUpperCase() || '';

    const [status, setStatus] = useState(statusParam);
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
    });

    const { loading: isUserLoading, currentUser } = useUser();
    const { isLoading: isItemsLoading, data } = useGetItems(
        {
            ownerUid: currentUser?.uid || null,
            status: status || null,
        },
        {
            enabled: !!currentUser?.uid,
        }
    );

    const handleChangeStatus = (newStatus: string) => {
        setStatus(newStatus as ItemStatus);
        if (!newStatus) {
            setSearchParams({});
        } else {
            setSearchParams({ status: newStatus });
        }
    };

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

    const isLoading = isUserLoading || isItemsLoading;

    return (
        <WrapperStyled
            sx={{
                display: isLoading ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLoading && (
                <Box height="calc(100vh - 2rem)" width="100%">
                    <Loader size={60} />
                </Box>
            )}
            {!isLoading && (
                <>
                    <Filters
                        mb={4}
                        value={status}
                        setIsOpenCreateDialog={setIsOpenCreateDialog}
                        handleChangeStatus={handleChangeStatus}
                    />
                    {data && data.length > 0 && (
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
                                    type,
                                    ownerUid,
                                }) => (
                                    <Grid2
                                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                    >
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
                                            type={type}
                                            imageStoragePath={imageStoragePath}
                                            ownerUid={ownerUid}
                                            onDelete={handleDelete}
                                            onUpdate={handleUpdate}
                                            onActivate={handleActivate}
                                        />
                                    </Grid2>
                                )
                            )}
                        </Grid2>
                    )}
                    {!data?.length && (
                        <Box sx={{ mt: { xs: 30, sm: 40 } }}>
                            <ZeroItemsLayout
                                hint="Sorry, there is no data to show now."
                                desc="No data is found."
                            />
                        </Box>
                    )}
                </>
            )}

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

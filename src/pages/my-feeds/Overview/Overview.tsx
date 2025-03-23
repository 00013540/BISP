import { useState } from 'react';
import { Button } from '@mui/material';

import { useGetItems } from '@/dataAccess/hooks/items/useGetItems.ts';

import { CreateFeedDialog } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const { data } = useGetItems();

    return (
        <WrapperStyled>
            <Button onClick={() => setIsOpenDialog(true)}>New feed</Button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <CreateFeedDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
            />
        </WrapperStyled>
    );
};

export default Overview;

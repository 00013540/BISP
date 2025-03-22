import { useState } from 'react';
import { Button } from '@mui/material';

import { CreateFeedDialog } from './components';
import { WrapperStyled } from './Overview.styled.ts';

const Overview = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <WrapperStyled>
            <Button onClick={() => setIsOpenDialog(true)}>New feed</Button>
            <CreateFeedDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
            />
        </WrapperStyled>
    );
};

export default Overview;

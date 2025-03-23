import * as yup from 'yup';
import { ItemDuration, ItemType } from '@/dataAccess/types';

export const getActivateFeedDialogSchema = () => {
    return yup.object().shape({
        type: yup.string().label('Type'),
        duration: yup.number().label('Duration'),
    });
};

export const defaultValues = {
    type: ItemType.FIRST_BID,
    duration: ItemDuration.ONE,
};

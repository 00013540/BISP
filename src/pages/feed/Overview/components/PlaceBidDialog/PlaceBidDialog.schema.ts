import * as yup from 'yup';

export const getPlaceBidDialogSchema = (currentBid: number) => {
    return yup.object().shape({
        bid: yup
            .number()
            .label('Bid amount')
            .required('Bid amount is a required field')
            .test(
                'is-input-less-than-zero',
                'Placed bid cannot be 0',
                (value: number) => {
                    return Number(value) > 0;
                }
            )
            .test(
                'is-input-less-than-minimum',
                `Placed bid is less than or equal current bid ${currentBid}`,
                (value: number) => {
                    return Number(value) > currentBid;
                }
            ),
    });
};

export const defaultValues = {
    bid: null,
};

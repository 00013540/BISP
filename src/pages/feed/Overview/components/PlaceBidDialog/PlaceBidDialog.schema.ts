import * as yup from 'yup';

export const getPlaceBidDialogSchema = (
    currentBid: number,
    totalBids: number
) => {
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
            )
            .test(
                'is-input-more-than-maximum',
                `Placed bid is more than user total bid ${totalBids}`,
                (value: number) => {
                    return Number(value) <= totalBids;
                }
            ),
    });
};

export const defaultValues = {
    bid: null,
};

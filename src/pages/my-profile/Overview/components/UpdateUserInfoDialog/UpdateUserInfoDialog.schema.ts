import * as yup from 'yup';

export const getUpdateUserInfoDialogSchema = () => {
    return yup.object().shape({
        firstName: yup
            .string()
            .label('First name')
            .required('First name is a required field'),
        lastName: yup
            .string()
            .label('Last name')
            .required('Last name is a required field'),
        phoneNumber: yup
            .string()
            .label('Phone number')
            .required('Phone number is a required field')
            .min(13, 'Phone number must be in the format +998991234567')
            .max(13, 'Phone number must be in the format +998991234567'),
        image: yup.string().label('Image'),
    });
};

export const defaultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    image: '',
};

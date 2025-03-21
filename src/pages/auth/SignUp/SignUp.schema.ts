import * as yup from 'yup';

export const getSignUpSchema = () => {
    return yup.object().shape({
        email: yup
            .string()
            .label('Email')
            .email('Please enter a valid email')
            .required('Email is a required field'),
        password: yup
            .string()
            .label('Password')
            .min(8, 'Password must be at least 8 characters')
            .required('Password is a required field'),
        passwordConfirm: yup
            .string()
            .label('Password')
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Password confirm is a required field'),
        phoneNumber: yup
            .string()
            .label('Phone number')
            .required('Phone number is a required field')
            .min(13, 'Phone number must be in the format +998991234567')
            .max(13, 'Phone number must be in the format +998991234567'),
        firstName: yup
            .string()
            .label('First name')
            .required('First name is a required field'),
        lastName: yup
            .string()
            .label('Last name')
            .required('Last name is a required field'),
    });
};

export const defaultValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
};

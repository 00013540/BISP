import * as yup from 'yup';

export const getSignInSchema = () => {
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
    });
};

export const defaultValues = {
    email: '',
    password: '',
};

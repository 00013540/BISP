import * as yup from 'yup';

export const getResetPasswordFormSchema = () =>
    yup.object().shape({
        email: yup
            .string()
            .label('Email')
            .email('Please enter a valid email')
            .required('Email is a required field.'),
    });

export const defaultValues = {
    email: '',
};

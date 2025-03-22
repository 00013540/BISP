import { FormikProps } from 'formik';
import { defaultValues } from '../../ResetPassword.schema.ts';

type Values = typeof defaultValues;

export interface ResetPasswordFormProps {
    errorMessage: string;
    isEmailSent: boolean;
    formik: FormikProps<Values>;
}

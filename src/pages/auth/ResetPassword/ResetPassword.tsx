import { useState } from 'react';
import { useFormik } from 'formik';
import { Box } from '@mui/material';

import { doPasswordReset } from '@/firebase/auth.ts';
import { CustomLink } from '@/components/common';

import { ResetPasswordForm, EmailSent } from './components';
import {
    defaultValues,
    getResetPasswordFormSchema,
} from './ResetPassword.schema.ts';
import { WrapperStyled } from './ResetPassword.styled.ts';

/**
 * This component is the parent of the email input form where a user must input their email
 * in order to receive their password reset link.
 */
const ResetPassword = () => {
    const [isRequestingNewPassword, setIsRequestingNewPassword] =
        useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [resetEmail, setResetEmail] = useState('');

    const handleResendForgotPasswordEmail = async (email?: string) => {
        try {
            setIsRequestingNewPassword(true);
            await doPasswordReset(email || resetEmail);
            setErrorMessage('');
            setIsEmailSent(true);
        } catch (err) {
            setErrorMessage((err as { message: string })?.message);
            return Promise.reject(err);
        } finally {
            setIsRequestingNewPassword(false);
        }
    };

    const formik = useFormik({
        initialValues: defaultValues,

        validationSchema: getResetPasswordFormSchema(),

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                setResetEmail(values.email);
                await handleResendForgotPasswordEmail(values.email);
                resetForm();
            } catch (err) {
                console.error(err);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <WrapperStyled>
            {isEmailSent ? (
                <EmailSent
                    isLoading={isRequestingNewPassword}
                    onClick={handleResendForgotPasswordEmail}
                />
            ) : (
                <ResetPasswordForm
                    formik={formik}
                    errorMessage={errorMessage}
                    isEmailSent={isEmailSent}
                />
            )}

            <Box display="flex" justifyContent="center" mt={6}>
                <CustomLink to="/auth/sign-in" sx={{ fontWeight: 400 }}>
                    Back to Sign-in
                </CustomLink>
            </Box>
        </WrapperStyled>
    );
};

export default ResetPassword;

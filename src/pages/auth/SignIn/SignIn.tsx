import { useState } from 'react';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { Box, Typography, FormLabel } from '@mui/material';

import { getFormikError } from '@/utils';
import { useUser } from '@/context/user-context';
import { doSignInWithEmailAndPassword } from '@/firebase/auth.ts';
import {
    CustomTextField,
    PasswordField,
    CustomLink,
} from '@/components/common';

import { defaultValues, getSignInSchema } from './SignIn.schema.ts';
import {
    WrapperStyled,
    SubmitButtonStyled,
    FormFieldsWrapperStyled,
} from './SignIn.styled.ts';

const SignIn = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useUser();

    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getSignInSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            try {
                await doSignInWithEmailAndPassword(
                    values.email,
                    values.password
                );
                navigate('/');
            } catch (err: unknown) {
                setErrorMessage('Invalid credentials');
                console.error(err);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <WrapperStyled>
            {userLoggedIn && <Navigate to={'/'} replace={true} />}
            <Helmet title="Sign In" />
            <Box mb={4}>
                <Box>
                    <Typography
                        variant="h2"
                        align="center"
                        color="text.highlight"
                        gutterBottom
                    >
                        Sign in
                    </Typography>
                    <Typography color="text.secondary" align="center">
                        Welcome back! Sign in to your account.
                    </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit}>
                    <FormFieldsWrapperStyled>
                        <CustomTextField
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            label="Email"
                            placeholder="Enter your email"
                            sx={{ mb: 4 }}
                            autoComplete="email"
                            autoFocus
                            {...getFormikError(formik, 'email')}
                        />
                        <PasswordField
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            label="Password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            {...getFormikError(formik, 'password')}
                        />
                    </FormFieldsWrapperStyled>

                    {!!errorMessage && (
                        <FormLabel
                            error={!!errorMessage}
                            sx={{ display: 'block', mb: 10, mt: -8 }}
                        >
                            {errorMessage}
                        </FormLabel>
                    )}

                    <SubmitButtonStyled
                        fullWidth
                        loading={formik.isSubmitting}
                        type="submit"
                        variant="contained"
                    >
                        Sign in
                    </SubmitButtonStyled>
                    <CustomLink
                        sx={{ fontWeight: 400, justifyContent: 'center' }}
                        to={`/reset-password`}
                    >
                        Forgot password?
                    </CustomLink>
                </form>
            </Box>

            <Typography color="text.secondary" align="center">
                Don't have an account?{' '}
                <CustomLink
                    to={`/auth/sign-up`}
                    sx={{ display: 'inline-block', fontWeight: 400 }}
                >
                    Sign Up
                </CustomLink>
            </Typography>
        </WrapperStyled>
    );
};

export default SignIn;

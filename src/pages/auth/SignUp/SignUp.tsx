import { useState } from 'react';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router';
import { Box, Typography, FormLabel, Grid2 } from '@mui/material';

import { getFormikError } from '@/utils';
import { useUser } from '@/context/user-context';
import { doCreateUserWithEmailAndPassword } from '@/firebase/auth.ts';
import { useCreateUser } from '@/dataAccess/hooks';
import {
    CustomTextField,
    PasswordField,
    CustomLink,
} from '@/components/common';

import { defaultValues, getSignUpSchema } from './SignUp.schema.ts';
import {
    WrapperStyled,
    SubmitButtonStyled,
    FormFieldsWrapperStyled,
} from './SignUp.styled.ts';

const SignIn = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useUser();

    const [errorMessage, setErrorMessage] = useState('');

    const { mutate, isPending } = useCreateUser({
        onSuccess: () => {
            navigate('/');
        },
        onError: () => {
            setErrorMessage('Something wen wrong. Please, try again later.');
        },
    });

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: getSignUpSchema(),

        onSubmit: async (values, { setSubmitting }) => {
            try {
                const { user } = await doCreateUserWithEmailAndPassword(
                    values.email,
                    values.password
                );
                mutate({
                    uid: user.uid,
                    ...values,
                });
            } catch (err: unknown) {
                setErrorMessage('Something went wrong');
                console.error(err);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <WrapperStyled>
            {userLoggedIn && !errorMessage && (
                <Navigate to={'/'} replace={true} />
            )}
            <Box mb={4}>
                <Box>
                    <Typography
                        variant="h2"
                        align="center"
                        color="text.highlight"
                        gutterBottom
                    >
                        Sign up
                    </Typography>
                    <Typography color="text.secondary" align="center">
                        Create Your Account!
                    </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit}>
                    <FormFieldsWrapperStyled>
                        <Grid2 container spacing={4}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <CustomTextField
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    label="First name"
                                    placeholder="Enter your first name"
                                    autoFocus
                                    {...getFormikError(formik, 'firstName')}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <CustomTextField
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    label="Last name"
                                    placeholder="Enter your last name"
                                    {...getFormikError(formik, 'lastName')}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <CustomTextField
                                    name="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    label="Phone number"
                                    placeholder="+998xxxxxxxxx"
                                    {...getFormikError(formik, 'phoneNumber')}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <CustomTextField
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    label="Email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    {...getFormikError(formik, 'email')}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <PasswordField
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    label="Password"
                                    placeholder="Enter your password"
                                    {...getFormikError(formik, 'password')}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <PasswordField
                                    name="passwordConfirm"
                                    value={formik.values.passwordConfirm}
                                    onChange={formik.handleChange}
                                    label="Password confirm"
                                    placeholder="Enter your password confirm"
                                    {...getFormikError(
                                        formik,
                                        'passwordConfirm'
                                    )}
                                />
                            </Grid2>
                        </Grid2>
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
                        loading={formik.isSubmitting || isPending}
                        type="submit"
                        variant="contained"
                    >
                        Sign up
                    </SubmitButtonStyled>
                </form>
            </Box>

            <Typography color="text.secondary" align="center">
                Already have an account?{' '}
                <CustomLink
                    to={`/auth/sign-in`}
                    sx={{ display: 'inline-block', fontWeight: 400 }}
                >
                    Sign In
                </CustomLink>
            </Typography>
        </WrapperStyled>
    );
};

export default SignIn;

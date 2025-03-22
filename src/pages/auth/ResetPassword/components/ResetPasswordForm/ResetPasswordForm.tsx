import { Box, Button, Typography } from '@mui/material';

import { getFormikError } from '@/utils/formikHelpers';
import { CustomTextField, HelperText } from '@/components/common';

import { FormFieldsWrapperStyled } from './ResetPasswordForm.styled';
import { ResetPasswordFormProps } from './ResetPasswordForm.types.ts';

/**
 * Email input form where a user must input their email in order to receive the password reset message/email
 */
const ResetPasswordForm = ({
    isEmailSent,
    errorMessage,
    formik,
}: ResetPasswordFormProps) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Typography
                    variant="h2"
                    align="center"
                    color="text.highlight"
                    gutterBottom
                >
                    Reset password
                </Typography>

                <Typography color="text.secondary" align="center">
                    Enter your email to reset your password
                </Typography>
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
                <FormFieldsWrapperStyled>
                    <CustomTextField
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        label="Email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        autoFocus
                        {...getFormikError(formik, 'email')}
                    />
                    {!!errorMessage && (
                        <Box mt={2}>
                            <HelperText>{errorMessage}</HelperText>
                        </Box>
                    )}
                </FormFieldsWrapperStyled>

                <Button
                    fullWidth
                    disabled={isEmailSent || formik.isSubmitting}
                    loading={formik.isSubmitting}
                    type="submit"
                    variant="contained"
                >
                    Reset password
                </Button>
            </form>
        </Box>
    );
};

export default ResetPasswordForm;

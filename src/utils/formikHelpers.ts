import type { FormikProps } from 'formik';

interface FormikFieldProps {
    error: boolean;
    helperText: string;
}

export const getFormikError = <Values>(
    formik: FormikProps<Values>,
    fieldName: keyof Values
): FormikFieldProps => {
    const error = Boolean(
        formik.errors[fieldName] && formik.touched[fieldName]
    );
    const helperText = error ? (formik.errors[fieldName] as string) : '';

    return { error, helperText };
};

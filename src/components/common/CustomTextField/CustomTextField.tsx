import type { FC } from 'react';
import { TextField, useTheme } from '@mui/material';

import { ErrorSVG, SuccessSVG } from '@/components/icons';

import type { CustomTextFieldProps } from './CustomTextField.types';
import { Label, HelperText } from './CustomTextField.styled';

const CustomTextField: FC<CustomTextFieldProps> = (props) => {
    const theme = useTheme();

    return (
        <>
            <Label disabled={props.disabled}>{props.label}</Label>
            <TextField
                {...props}
                label=""
                className={`${props.warning && 'Mui-warning'} ${props.success && 'Mui-success'}`}
                helperText={
                    props.helperText &&
                    (props.error ? (
                        <>
                            <ErrorSVG
                                style={{ marginRight: '4px' }}
                                height="16px"
                                width="16px"
                                fillColor={theme.palette.error.main}
                            />
                            <HelperText
                                warning={props.warning}
                                error={props.error}
                                success={props.success}
                            >
                                {props.helperText}
                            </HelperText>
                        </>
                    ) : props.warning ? (
                        <>
                            <ErrorSVG
                                style={{ marginRight: '4px' }}
                                height="16px"
                                width="16px"
                                fillColor={theme.palette.warning.main}
                            />
                            <HelperText
                                warning={props.warning}
                                error={props.error}
                                success={props.success}
                            >
                                {props.helperText}
                            </HelperText>
                        </>
                    ) : props.success ? (
                        <>
                            <SuccessSVG
                                style={{ marginRight: '4px' }}
                                height="16px"
                                width="16px"
                            />
                            <HelperText
                                warning={props.warning}
                                error={props.error}
                                success={props.success}
                            >
                                {props.helperText}
                            </HelperText>
                        </>
                    ) : (
                        <HelperText
                            warning={props.warning}
                            error={props.error}
                            success={props.success}
                        >
                            {props.helperText}
                        </HelperText>
                    ))
                }
            />
        </>
    );
};

export default CustomTextField;

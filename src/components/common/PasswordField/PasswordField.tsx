import { type FC, useState } from 'react';
import { type TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { CustomTextField } from '../CustomTextField';

const PasswordField: FC<TextFieldProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <CustomTextField
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? (
                                <VisibilityOff fontSize="small" />
                            ) : (
                                <Visibility fontSize="small" />
                            )}
                        </IconButton>
                    </InputAdornment>
                ),
                ...props.InputProps,
            }}
            {...props}
        />
    );
};

export default PasswordField;

import type { FC } from 'react';
import { FormControl, useTheme } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { ErrorSVG } from '@/components/icons';

import type { CustomSelectProps } from './CustomSelect.types';
import {
    FormLabel,
    Select,
    MenuItem,
    FormHelperText,
} from './CustomSelect.styled';

const CustomSelect: FC<CustomSelectProps> = ({
    label,
    value,
    onChange,
    onOpen,
    onClose,
    items,
    id,
    name,
    error,
    helperText,
    sx,
}) => {
    const theme = useTheme();

    const handleOpen = () => {
        if (onOpen) {
            onOpen();
        }
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <FormControl sx={{ minWidth: '100%', ...sx }} error={error}>
            {label ? <FormLabel>{label}</FormLabel> : null}
            <Select
                IconComponent={ExpandMore}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onOpen={handleOpen}
                onClose={handleClose}
                MenuProps={{
                    slotProps: {
                        paper: {
                            sx: {
                                borderRadius: 2,
                                border: `1.5px solid ${theme.palette.gray['3']}`,
                                boxShadow:
                                    '-4px -4px 8px 0px rgba(0, 154, 139, 0.02), 4px 4px 8px 0px rgba(0, 115, 104, 0.04)',
                            },
                        },
                    },
                }}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
            {error && helperText && (
                <FormHelperText>
                    <ErrorSVG
                        height="16px"
                        width="16px"
                        fillColor={theme.palette.error.main}
                        style={{ marginRight: '4px' }}
                    />
                    <span>{helperText}</span>
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default CustomSelect;

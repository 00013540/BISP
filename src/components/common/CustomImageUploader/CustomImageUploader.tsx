import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { Typography, Box, useTheme } from '@mui/material';

import { ErrorSVG } from '@/components/icons';

import { CustomImageUploaderProps } from './CustomImageUploader.types.ts';
import {
    FileInputStyled,
    LabelStyled,
    ImageStyled,
    PlusStyled,
    HelperText,
    XStyled,
} from './CustomImageUploader.styled.ts';

const CustomImageUploader = ({
    label,
    error,
    helperText,
    value,
    setValue,
    setFormikValue,
    height = '100px',
    width = '140px',
    ...props
}: CustomImageUploaderProps) => {
    const theme = useTheme();

    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (value) {
            if (typeof value === 'string') {
                setPreview(value);
                if (setFormikValue) setFormikValue(value);
            } else {
                setPreview(URL.createObjectURL(value));
                if (setFormikValue) setFormikValue(URL.createObjectURL(value));
            }
        } else {
            setPreview(null);
            if (setFormikValue) setFormikValue('');
        }
    }, [value]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setValue(file);
        }
    };

    const handleRemoveImage = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setValue(null);
        setPreview(null);

        if (setFormikValue) setFormikValue('');

        const fileInput = document.getElementById(
            'fileInput'
        ) as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };

    return (
        <Box {...props}>
            {!!label && (
                <Typography color="text.primary" variant="body1" mb={1}>
                    {label}
                </Typography>
            )}
            <FileInputStyled
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleFileChange}
            />
            <LabelStyled
                htmlFor="fileInput"
                preview={preview}
                error={error}
                sx={{
                    height,
                    width,
                }}
            >
                {!preview ? (
                    <PlusStyled>+</PlusStyled>
                ) : (
                    <>
                        <ImageStyled src={preview} alt="Preview" />
                        <XStyled onClick={handleRemoveImage}>&times;</XStyled>
                    </>
                )}
            </LabelStyled>
            {error && (
                <Box display="flex" alignItems="center" mt={1}>
                    <ErrorSVG
                        style={{ marginRight: '4px' }}
                        height="16px"
                        width="16px"
                        fillColor={theme.palette.error.main}
                    />
                    <HelperText sx={{ fontSize: '0.75rem' }} error={error}>
                        {helperText}
                    </HelperText>
                </Box>
            )}
        </Box>
    );
};

export default CustomImageUploader;

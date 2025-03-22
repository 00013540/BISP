import type { FC } from 'react';
import { Typography } from '@mui/material';

import { ErrorSVG, SuccessSVG } from '@/components/icons';

import type { HelperTextProps } from './HelperText.types';

const HelperText: FC<HelperTextProps> = ({ variant = 'error', children }) => {
    const IconComponent = variant === 'success' ? SuccessSVG : ErrorSVG;

    return (
        <Typography
            color={`${variant}.main`}
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
            <IconComponent
                height="16px"
                width="16px"
                fillColor="currentColor"
            />
            {children}
        </Typography>
    );
};

export default HelperText;

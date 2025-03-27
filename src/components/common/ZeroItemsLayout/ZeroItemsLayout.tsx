import type { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { EmptySVG } from '@/components/icons';
import { useIsMobile } from '@/hooks';

import type { ZeroItemsLayoutProps } from './ZeroItemsLayout.types';
import {
    ZeroItemsLayoutWrapper,
    TypographyWrapper,
} from './ZeroItemsLayout.styled';

const ZeroItemsLayout: FC<ZeroItemsLayoutProps> = ({
    desc,
    hint,
    iconSize,
    className,
    children,
    Icon = EmptySVG,
    lightTheme = false,
}) => {
    const theme = useTheme();
    const mobileView = useIsMobile();

    const fillColor = lightTheme
        ? theme.palette.secondary.main
        : theme.palette.primary.main;

    return (
        <ZeroItemsLayoutWrapper
            lightTheme={lightTheme.toString()}
            className={className}
        >
            <Box>
                <Icon
                    fillColor={fillColor}
                    width={`${iconSize || mobileView ? '4' : '5'}rem`}
                    height={`${iconSize || mobileView ? '4' : '5'}rem`}
                />
            </Box>
            <TypographyWrapper lightTheme={lightTheme.toString()}>
                {desc && (
                    <Typography fontWeight="bold" fontSize="1.1em">
                        {desc}
                    </Typography>
                )}
                {hint && <Typography variant="body1">{hint}</Typography>}
            </TypographyWrapper>
            {children}
        </ZeroItemsLayoutWrapper>
    );
};

export default ZeroItemsLayout;

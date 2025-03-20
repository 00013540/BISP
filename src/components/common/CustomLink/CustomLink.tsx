import type { FC, MouseEvent } from 'react';
import { Link as RouterLink } from 'react-router';
import { Link as MuiLink, Box } from '@mui/material';

import type { CustomLinkProps } from './CustomLink.types';

const CustomLink: FC<CustomLinkProps> = ({
    external = false,
    children,
    to,
    sideEffect,
    disabled,
    size = 'medium',
    startIcon,
    endIcon,
    sxIcon,
    ...props
}) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            event.preventDefault();
            return;
        }

        if (sideEffect) {
            sideEffect();
        }
    };

    const variant = size === 'large' ? 'h5' : 'body1';
    const iconDimensions = size === 'large' ? 20 : 16;

    const getLinkAttrs = () => {
        if (external) {
            return {
                component: 'a',
                href: to,
                target: '_blank',
            };
        }

        return {
            component: RouterLink,
            to,
        };
    };

    return (
        <MuiLink
            aria-disabled={disabled}
            onClick={handleClick}
            variant={variant}
            {...getLinkAttrs()}
            {...props}
        >
            {startIcon && (
                <Box
                    display="flex"
                    alignItems="center"
                    component="span"
                    width={iconDimensions}
                    height={iconDimensions}
                    mr={2}
                    sx={sxIcon}
                >
                    {startIcon}
                </Box>
            )}
            {children}
            {endIcon && (
                <Box
                    display="flex"
                    alignItems="center"
                    component="span"
                    width={iconDimensions}
                    height={iconDimensions}
                    ml={2}
                    sx={sxIcon}
                >
                    {endIcon}
                </Box>
            )}
        </MuiLink>
    );
};

export default CustomLink;

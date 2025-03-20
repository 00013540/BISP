import type { Shadows } from '@mui/material/styles/shadows';

import { convertHexToRGBA } from './palette.utils';

const generateShadows = (brandColor: string): Shadows => [
    'none',
    `2px 4px 18px 0px ${convertHexToRGBA(brandColor, 0.14)}`, // Primary shadow
    `-5px -5px 10px 0px ${convertHexToRGBA(brandColor, 0.04)}, 5px 5px 10px 0px ${convertHexToRGBA(brandColor, 0.06)}`, // Drop shadow/M
    `-16px -16px 30px 0px ${convertHexToRGBA(brandColor, 0.08)}, 16px 16px 30px 0px ${convertHexToRGBA(brandColor, 0.1)}`, // Drop shadow/L
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
];

export default generateShadows;

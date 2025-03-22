import type { FC } from 'react';

import type { BrandLogoProps } from './BrandLogo.types';

const BrandLogo: FC<BrandLogoProps> = ({ height = '2rem', width }) => {
    return (
        <img
            style={{ height, width, maxHeight: '6.25rem', maxWidth: '12.5rem' }}
            src="/logo.png"
            alt="Logo"
        />
    );
};

export default BrandLogo;

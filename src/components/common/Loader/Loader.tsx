import type { CSSProperties, FC } from 'react';

import type { LoaderProps } from './Loader.types';
import { LoaderContainer, LoaderProgress } from './Loader.styled';

const centeredLoaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Loader: FC<LoaderProps> = ({
    color = 'primary',
    size = 40,
    centered = false,
    style,
}) => {
    const styles = {
        ...(centered ? centeredLoaderStyle : {}),
        ...style,
    } as CSSProperties;

    return (
        <LoaderContainer style={styles}>
            <LoaderProgress size={size} color={color} />
        </LoaderContainer>
    );
};

export default Loader;

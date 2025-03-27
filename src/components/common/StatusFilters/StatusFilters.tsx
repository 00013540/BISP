import { FC } from 'react';

import { ListStyled, ButtonStyled } from './StatusFilters.styled';
import { StatusFiltersProps } from './StatusFilters.types';

const StatusFilters: FC<StatusFiltersProps> = ({
    options,
    value,
    onChange,
}) => {
    return (
        <ListStyled>
            {options.map((option) => (
                <li key={option.value}>
                    <ButtonStyled
                        type="button"
                        disabled={value === option.value}
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </ButtonStyled>
                </li>
            ))}
        </ListStyled>
    );
};

export default StatusFilters;

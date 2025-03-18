import { type MouseEvent, useState } from 'react';
import { Stack, Typography, MenuItem } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import {
  StyledInputWrapper,
  StyledButton,
  StyledMenuWrapper,
} from './RowsPerPageSelector.styled';
import {
  RowsPerPageSelectorProps,
  PerPageOption,
} from './RowsPerPageSelector.types';

const RowsPerPageSelector = ({
  perPage,
  options,
  onChange,
}: RowsPerPageSelectorProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (item: number) => {
    onChange(item);
    handleClose();
  };

  const getOptionLabel = (option: PerPageOption) => {
    return typeof option === 'number' ? option : option.label;
  };

  const getOptionValue = (option: PerPageOption) => {
    return typeof option === 'number' ? option : option.value;
  };

  return (
    <Stack direction="row" alignItems="center">
      <Typography color="text.secondary" variant="body1" mr={2}>
        Show
      </Typography>

      <StyledInputWrapper
        id="custom-pagination-menu-wrapper"
        aria-haspopup="true"
        aria-controls={open ? 'custom-pagination-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <StyledButton open={open}>
          <span>{perPage}</span>
          <ChevronRight height="8px" width="8px" />
        </StyledButton>
      </StyledInputWrapper>
      <StyledMenuWrapper
        id="custom-pagination-menu"
        MenuListProps={{
          'aria-labelledby': 'custom-pagination-menu-wrapper',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((item) => (
          <MenuItem
            key={getOptionValue(item)}
            onClick={() => handleChange(getOptionValue(item))}
            disableRipple
          >
            {getOptionLabel(item)}
          </MenuItem>
        ))}
      </StyledMenuWrapper>
    </Stack>
  );
};

export default RowsPerPageSelector;

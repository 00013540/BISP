import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface IMenuItem {
  text: string;
  value: string | number;
}

export interface CustomSelectProps {
  value: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  onChange: (e: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
  items: IMenuItem[];
  label: string;
  id?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
}

import type { Theme } from '@mui/material';

// ** Overrides Imports
import MuiCssBaseline from './cssBaseline';
import MuiChip from './chip';
import MuiButton from './button';
import MuiCard from './card';
import MuiFormHelperText from './formHelperText';
import MuiLink from './link';
import MuiTextField from './textField';
import MuiTypography from './typography';
import MuiAccordionSummary from './accordionSummary';
import MuiPaper from './paper';
import MuiCollapse from './collapse';
import MuiDivider from './divider';
import MuiTooltip from './tooltip';
import MuiBackdrop from './backdrop';
import MuiDataGrid from './dataGrid';
import MuiAlert from './alert';
import MuiSlider from './slider';

const Overrides = (theme: Theme) => {
  const cssBaseline = MuiCssBaseline(theme);
  const button = MuiButton(theme);
  const card = MuiCard(theme);
  const chip = MuiChip(theme);
  const helperText = MuiFormHelperText(theme);
  const link = MuiLink(theme);
  const textField = MuiTextField(theme);
  const typography = MuiTypography(theme);
  const accordionSummary = MuiAccordionSummary();
  const paper = MuiPaper();
  const collapse = MuiCollapse();
  const divider = MuiDivider(theme);
  const tooltip = MuiTooltip(theme);
  const backdrop = MuiBackdrop();
  const dataGrid = MuiDataGrid(theme);
  const alert = MuiAlert();
  const slider = MuiSlider(theme);

  return Object.assign(
    cssBaseline,
    button,
    card,
    chip,
    helperText,
    link,
    textField,
    typography,
    accordionSummary,
    paper,
    collapse,
    divider,
    tooltip,
    backdrop,
    dataGrid,
    alert,
    slider
  );
};

export default Overrides;

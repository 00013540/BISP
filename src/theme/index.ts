import { createTheme } from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';
import overrides from './overrides';
import generateShadows from './shadows';
import generatePalette from './palette';

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary'];
    white: string;
    black: string;
  }

  interface PaletteOptions {
    gray: PaletteOptions['primary'];
    white: string;
    black: string;
  }

  interface PaletteColor {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
    12?: string;
    13?: string;
  }
  interface SimplePaletteColorOptions {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
    12?: string;
    13?: string;
  }

  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
  }
}

export const generateTheme = () => {
  let theme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`, // theme.spacing(1) = 0.25rem = 4px
    breakpoints,
    typography,
    shadows: generateShadows('#00C0AE'),
    palette: generatePalette('#00C0AE'),
  });

  theme = createTheme(theme, {
    components: { ...overrides(theme) },
  });

  return theme;
};

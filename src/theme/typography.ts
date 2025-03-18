import type { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: [
    '"Qanelas"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  h1: {
    fontSize: '2.375rem',
    lineHeight: '2.875rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.875rem',
    lineHeight: '2.5rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: '1.375rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
  },
  title1: { fontSize: '4rem', lineHeight: '4.5rem', fontWeight: 800 },
  title2: { fontSize: '3rem', lineHeight: '3.5rem', fontWeight: 800 },
};

export default typography;

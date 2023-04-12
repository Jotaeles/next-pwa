import type { TypographyVariantsOptions } from '@mui/material/styles';

import { PALETTE } from './palette';

export const TYPOGRAPHY: TypographyVariantsOptions = {
  fontFamily: ['"Inter"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  fontSize: 16,
  button: {
    textTransform: 'none',
    fontSize: '1rem',
    lineHeight: '22px',
    letterSpacing: '0.46px',
  },
  h1: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: '116%',
    color: PALETTE.text.primary,
    '@media (max-width: 599px)': {
      fontSize: '1.75rem',
    },
  },
  h2: {
    fontSize: '1.250rem',
    fontWeight: 300,
    color: '#233362',
    '@media (min-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 600,
    color: PALETTE.text.primary,
    '@media (min-width: 600px)': {
      fontSize: '1.250rem',
    },
  },
  h4: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#233362',
    '@media (min-width: 600px)': {
      fontSize: '1rem',
    },
  },
  h5: {
    fontSize: '0.813rem',
    fontWeight: 400,
    color: '#233362',
    '@media (min-width: 600px)': {
      fontSize: '0.875rem',
    },
  },
  h6: {
    fontSize: '0.813rem',
    fontWeight: 500,
    color: '#233362',
    '@media (min-width: 600px)': {
      fontSize: '0.875rem',
    },
  },
  title1: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.875,
    letterSpacing: '0.2px',
    color: PALETTE.text.primary,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0.25px',
    color: PALETTE.text.primary,
  },
  body2: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '21px',
    color: PALETTE.text.primary,
  },
  body3: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  body4: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '20px',
  },
  subtitle1: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: PALETTE.text.primary,
  },
  subtitle2: {
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  caption1: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0.3px',
  },
  caption2: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  // Navbar Wallet
  wallet: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.3rem',
    color: PALETTE.text.grey[900],
    letterSpacing: '0.1px',
  },
};

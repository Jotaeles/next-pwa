import { esES } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import { PALETTE } from './palette';
import { TYPOGRAPHY } from './typography';

declare module '@mui/material/styles' {
  // Pallete
  interface TypeText {
    grey: {
      400: string;
      900: string;
    };
    black: string;
  }
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    menu?: string;
    background?: string;
  }
  interface SimplePaletteColorOptions {
    menu?: string;
    background?: string;
  }

  // Typography
  interface TypographyVariants {
    title1: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    wallet: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title1: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    wallet: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    body3: true;
    body4: true;
    caption: false;
    caption1: true;
    caption2: true;
    minimum1: true;
    minimum2: true;
    wallet: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true;
  }
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme(
  {
    palette: { ...PALETTE },
    typography: { ...TYPOGRAPHY },
    spacing: 8,
    shape: {
      borderRadius: 6,
    },
    shadows: [
      'none',
      '0px 2px 1px -1px rgba(152,167,204,0.12),0px 1px 1px 0px rgba(152,167,204,0.14),0px 1px 3px 0px rgba(152,167,204,0.20)',
      '0px 3px 1px -2px rgba(152,167,204,0.12),0px 2px 2px 0px rgba(152,167,204,0.14),0px 1px 5px 0px rgba(152,167,204,0.20)',
      '0px 3px 3px -2px rgba(152,167,204,0.12),0px 3px 4px 0px rgba(152,167,204,0.14),0px 1px 8px 0px rgba(152,167,204,0.20)',
      '0px 2px 4px -1px rgba(152,167,204,0.12),0px 4px 5px 0px rgba(152,167,204,0.14),0px 1px 10px 0px rgba(152,167,204,0.20)',
      '0px 3px 5px -1px rgba(152,167,204,0.12),0px 5px 8px 0px rgba(152,167,204,0.14),0px 1px 14px 0px rgba(152,167,204,0.20)',
      '0px 3px 5px -1px rgba(152,167,204,0.12),0px 6px 10px 0px rgba(152,167,204,0.14),0px 1px 18px 0px rgba(152,167,204,0.20)',
      '0px 4px 5px -2px rgba(152,167,204,0.12),0px 7px 10px 1px rgba(152,167,204,0.14),0px 2px 16px 1px rgba(152,167,204,0.20)',
      '0px 5px 5px -3px rgba(152,167,204,0.12),0px 8px 10px 1px rgba(152,167,204,0.14),0px 3px 14px 2px rgba(152,167,204,0.20)',
      '0px 5px 6px -3px rgba(152,167,204,0.12),0px 9px 12px 1px rgba(152,167,204,0.14),0px 3px 16px 2px rgba(152,167,204,0.20)',
      '0px 6px 6px -3px rgba(152,167,204,0.12),0px 10px 14px 1px rgba(152,167,204,0.14),0px 4px 18px 3px rgba(152,167,204,0.20)',
      '0px 6px 7px -4px rgba(152,167,204,0.12),0px 11px 15px 1px rgba(152,167,204,0.14),0px 4px 20px 3px rgba(152,167,204,0.20)',
      '0px 7px 8px -4px rgba(152,167,204,0.12),0px 12px 17px 2px rgba(152,167,204,0.14),0px 5px 22px 4px rgba(152,167,204,0.20)',
      '0px 7px 8px -4px rgba(152,167,204,0.12),0px 13px 19px 2px rgba(152,167,204,0.14),0px 5px 24px 4px rgba(152,167,204,0.20)',
      '0px 7px 9px -4px rgba(152,167,204,0.12),0px 14px 21px 2px rgba(152,167,204,0.14),0px 5px 26px 4px rgba(152,167,204,0.20)',
      '0px 8px 9px -5px rgba(152,167,204,0.12),0px 15px 22px 2px rgba(152,167,204,0.14),0px 6px 28px 5px rgba(152,167,204,0.20)',
      '0px 8px 10px -5px rgba(152,167,204,0.12),0px 16px 24px 2px rgba(152,167,204,0.14),0px 6px 30px 5px rgba(152,167,204,0.20)',
      '0px 8px 11px -5px rgba(152,167,204,0.12),0px 17px 26px 2px rgba(152,167,204,0.14),0px 6px 32px 5px rgba(152,167,204,0.20)',
      '0px 9px 11px -5px rgba(152,167,204,0.12),0px 18px 28px 2px rgba(152,167,204,0.14),0px 7px 34px 6px rgba(152,167,204,0.20)',
      '0px 9px 12px -6px rgba(152,167,204,0.12),0px 19px 29px 2px rgba(152,167,204,0.14),0px 7px 36px 6px rgba(152,167,204,0.20)',
      '0px 10px 13px -6px rgba(152,167,204,0.12),0px 20px 31px 3px rgba(152,167,204,0.14),0px 8px 38px 7px rgba(152,167,204,0.20)',
      '0px 10px 13px -6px rgba(152,167,204,0.12),0px 21px 33px 3px rgba(152,167,204,0.14),0px 8px 40px 7px rgba(152,167,204,0.20)',
      '0px 10px 14px -6px rgba(152,167,204,0.12),0px 22px 35px 3px rgba(152,167,204,0.14),0px 8px 42px 7px rgba(152,167,204,0.20)',
      '0px 11px 14px -7px rgba(152,167,204,0.12),0px 23px 36px 3px rgba(152,167,204,0.14),0px 9px 44px 8px rgba(152,167,204,0.20)',
      '0px 11px 15px -7px rgba(152,167,204,0.12),0px 24px 38px 3px rgba(152,167,204,0.14),0px 9px 46px 8px rgba(152,167,204,0.20)',
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        html {
          WebkitFontSmoothing: auto;
        }
        body {
          min-height: 100vh;
          min-width: 100vw;
        }
      `,
      },
      MuiTypography: {
        defaultProps: { variant: 'body4' },
      },
      // TODO: Remove or improve MuiTableRow. This config was added as an alternative while we are adding corresponding variants
      MuiTableRow: {
        styleOverrides: {
          root: {
            '& td, th, .MuiTypography-root': { ...TYPOGRAPHY.body4 },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '10px 25px',
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            paddingRight: '40px',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: PALETTE.primary.main,
            cursor: 'pointer',
          },
        },
        defaultProps: {
          variant: 'body4',
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          color: 'primary',
        },
        variants: [
          {
            props: { size: 'large' },
            style: {
              fontSize: '0.938rem',
              lineHeight: '1.625frem',
              letterSpacing: '.46px',
              '@media (min-width: 900px)': {
                fontSize: '0.938rem',
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              fontSize: '0.813rem',
              fontWeight: 500,
              lineHeight: '1.5rem',
              padding: '0.375rem 1rem',
              letterSpacing: '.4px',
              '@media (min-width: 900px)': {
                fontSize: '0.875rem',
              },
            },
          },
          {
            props: { variant: 'secondary' },
            style: {
              backgroundColor: '#FFFFFF',
              color: '#5233EA',
              border: '1.5px solid #5233EA',
              padding: '0.375rem calc(1rem - 1.5px)',
              ':hover': {
                borderWidth: '1.5px',
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              border: '1.5px solid',
              padding: '0.375rem calc(1rem - 1.5px)',
              ':hover': {
                borderWidth: '1.5px',
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              paddingLeft: '.5rem',
              paddingRight: '.5rem',
            },
          },
        ],
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            ...TYPOGRAPHY.body2,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            ...TYPOGRAPHY.body2,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ...TYPOGRAPHY.body2,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiSelect: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiRadio: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiTooltip: {
        styleOverrides: {
          popper: {
            textAlign: 'center',
          },
        },
      },
    },
  },
  esES
);

const themeQuoterTable = createTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '& td': { border: 0, padding: '7px 16px' },
          '&.MuiTable-root': {
            background: 'transparent',
            borderBottom: 'none',
          },
          '&.MuiTableRow-root .MuiTableCell-head': {
            borderBottom: 'none',
            padding: '0 16px',
            color: '#58668F',
          },
          '&.MuiTableRow-root': {
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '6px',
            flexWrap: 'wrap',
            background: 'white',
            boxShadow:
              '0px 3px 5px -1px rgba(152, 167, 204, 0.2), 0px 5px 8px rgba(152, 167, 204, 0.14), 0px 1px 14px rgba(152, 167, 204, 0.12)',
          },
          '&.MuiTableRow-head': {
            display: 'flex',
            flexWrap: 'wrap',
            background: 'transparent',
            boxShadow: 'none',
            marginBottom: 0,
          },
          '&.MuiTableRow-root .&MuiTableCell-root': {
            padding: '0',
          },
          '&.MuiTableRow-root td, &.MuiTableRow-root th': {
            flex: 1,
          },
        },
      },
    },
  },
});

export { theme, themeQuoterTable };

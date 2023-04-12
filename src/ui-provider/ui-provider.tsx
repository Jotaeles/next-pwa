import { ReactNode } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dateFnsLocaleEs from 'date-fns/locale/es';

import { theme } from './config';

const clientSideEmotionCache = createCache({ key: 'css' });

export const UiProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={dateFnsLocaleEs}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default UiProvider;

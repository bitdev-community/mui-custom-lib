import '@emotion/styled';
import '@emotion/react';
import { ReactNode } from 'react';
import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { defaultTheme } from '@learnbit-react/custom-mui-lib.theme.default-theme';

export type ThemeProviderProps = {
  /**
   * The children to render within the theme.
   */
  children?: ReactNode;

  /**
   * The theme to use.
   */
  theme?: ThemeOptions;
};

export function ThemeProvider({
  children,
  theme = defaultTheme(),
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  );
}

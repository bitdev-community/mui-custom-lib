import { ThemeProvider } from '@learnbit-react/custom-mui-lib.theme.theme-provider';
import { Button } from './button.js';

export const DefaultButton = () => {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
};

export const ContainedButton = () => {
  return (
    <ThemeProvider>
      <Button variant="contained">Click me</Button>
    </ThemeProvider>
  );
};

export const OutlineddButton = () => {
  return (
    <ThemeProvider>
      <Button variant="outlined">Click me</Button>
    </ThemeProvider>
  );
};

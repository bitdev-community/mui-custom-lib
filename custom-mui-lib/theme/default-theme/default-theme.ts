import "@emotion/styled";
import {
  createTheme,
  type ThemeOptions,
} from "@learnbit-react/custom-mui-lib.theme.create-theme";
import { getDefaultFonts } from "@learnbit-react/custom-mui-lib.typography.get-default-fonts";

export function defaultTheme(): ThemeOptions {
  return createTheme({
    components: {
      MuiCssBaseline: {
        /**
         * global CSS overrides
         * immediately load the default fonts
         * */
        styleOverrides: getDefaultFonts(),
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#4d64a8",
      },
      secondary: {
        main: "#da8f91",
      },
      success: {
        main: "#70bf72",
      },
      background: {
        default: "#fbfbfb",
      },
    },
    typography: {
      fontFamily: "Outfit, sans-serif",
      /* this is the custom typography variant */
      handwriting: {
        fontFamily: "Handlee, cursive",
      },
    },
  });
}

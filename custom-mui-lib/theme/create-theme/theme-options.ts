import type { CSSProperties } from "react";

import type {
  ThemeOptions as BaseThemeOptions,
  TypographyVariant as BaseTypographyVariant,
  TypographyVariantsOptions as BaseTypographyVariantsOptions,
} from "@mui/material";

export type TypographyVariant = "handwriting" | BaseTypographyVariant;

export interface TypographyVariantsOptions
  extends BaseTypographyVariantsOptions {
  handwriting?: CSSProperties;
}

export interface ThemeOptions extends BaseThemeOptions {
  // Add custom properties here
  typography?: TypographyVariantsOptions;
}

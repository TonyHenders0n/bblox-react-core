import React from "react";

declare module "@mui/material/styles" {
  export interface NeutralColors {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface Palette {
    neutral: NeutralColors;
  }

  interface PaletteOptions {
    neutral?: NeutralColors;
  }

  interface PaletteColor {
    lightest?: string;
    darkest?: string;
    alpha4?: string;
    alpha8?: string;
    alpha12?: string;
    alpha30?: string;
    alpha50?: string;
  }

  interface TypeBackground {
    paper: string;
    default: string;
  }
}

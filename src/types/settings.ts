import { Direction, PaletteMode } from "@mui/material";
import { ReactElement } from "react";

export type ColorPreset = 'blue' | 'green' | 'indigo' | 'purple';

export type Layout = "horizontal" | "vertical";

export type NavColor = "blend-in" | "discreet" | "evident";

export type Contrast = "normal" | "high";

export type SettingsOptionsType =
  | "colorPreset"
  | "contrast"
  | "direction"
  | "layout"
  | "navColor"
  | "paletteMode"
  | "responsiveFontSizes"
  | "stretch";

/**
 *
 */
export interface SettingsOptionValue<T> {
  label: string;
  value: T;
  icon?: ReactElement;
  color?: string;
}

export interface SettingValuesOverride {
  type: SettingsOptionsType; 
  optionValuesList: SettingsOptionValue<any>[];
}

/**
 *
 */
export interface Settings { 
  colorPreset?: any;
  contrast?: Contrast;
  direction?: Direction;
  layout?: Layout;
  navColor?: NavColor;
  paletteMode?: PaletteMode;
  responsiveFontSizes?: boolean;
  stretch?: boolean;
}

 
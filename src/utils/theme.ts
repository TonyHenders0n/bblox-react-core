import { Color, PaletteColor, useTheme } from "@mui/material"; 
import { alpha } from "@mui/material/styles";

type KeyColor = keyof Color;

/**
 * 
 * @param param0 
 * @returns 
 */
export const useGetDefaultThemeColor = ({
  lightWeight = 100,
  darkWeight = 900,
}: { lightWeight?: KeyColor; darkWeight?: KeyColor } = {}) => {
  const { palette } = useTheme();
  return palette.mode === "light"
    ? palette.grey[lightWeight]
    : palette.grey[darkWeight];
};
 
/**
 * 
 * @param color 
 * @returns 
 */
export const withAlphas = (color: PaletteColor): PaletteColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

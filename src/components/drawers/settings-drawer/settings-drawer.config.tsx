 
// import { blue, green, indigo, purple  } from "";
import { Box, Direction, PaletteMode, Stack, SvgIcon } from "@mui/material";
import SunIcon from "@untitled-ui/icons-react/build/esm/Sun";
import Moon01Icon from "@untitled-ui/icons-react/build/esm/Moon01"; 
  
import LeftIndent01Icon from '@untitled-ui/icons-react/build/esm/LeftIndent01';
import RightIndent01Icon from '@untitled-ui/icons-react/build/esm/RightIndent01';
import React from 'react';
import { DefaultLogo } from '~/components/logo/default-logo';
import { ColorPreset, Contrast, Layout, NavColor, SettingsOptionValue } from '~/types/settings';
import { blue, green, indigo, purple } from '~/types/colors';

/**
 * 
 */
export const colorPresetOptions: SettingsOptionValue<ColorPreset>[] = [
  {
    label: "Green",
    value: "green",
    color: green.main,
  },
  {
    label: "Blue",
    value: "blue",
    color: blue.main,
  },
  {
    label: "Indigo",
    value: "indigo",
    color: indigo.main,
  },
  {
    label: "Purple",
    value: "purple",
    color: purple.main,
  }, 
];

/**
 * 
 */
export const colorSchemeOptions: SettingsOptionValue<PaletteMode>[] = [
  {
    label: "Light",
    value: "light",
    icon: (
      <SvgIcon fontSize="small">
        <SunIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Dark",
    value: "dark",
    icon: (
      <SvgIcon fontSize="small">
        <Moon01Icon />
      </SvgIcon>
    ),
  },
];

/**
 * 
 */
export const contrastOptions: SettingsOptionValue<Contrast>[] = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "High",
    value: "high",
  },
];


/**
 * 
 */

export const layoutOptions: SettingsOptionValue<Layout>[] = [
  {
    label: 'Vertical',
    value: 'vertical',
    icon: (
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto'
        }}
      >
        <Box
          sx={{
            borderRightColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.500'
              : 'neutral.300',
            borderRightStyle: 'dashed',
            borderRightWidth: 1,
            px: 1,
            py: 0.5
          }}
        >
          <Stack spacing={1}>
            <Box
              sx={{
                display: 'inline-flex',
                height: 12,
                width: 12
              }}
            >
              <DefaultLogo />
            </Box>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '2px',
                height: 4,
                width: 26
              }}
            />
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark'
                  ? 'neutral.600'
                  : 'neutral.300',
                borderRadius: '2px',
                height: 4,
                width: 26
              }}
            />
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark'
                  ? 'neutral.600'
                  : 'neutral.300',
                borderRadius: '2px',
                height: 4,
                width: 26
              }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            p: 1
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
              flex: '1 1 auto'
            }}
          />
        </Box>
      </Box>
    )
  },
  {
    label: 'Horizontal',
    value: 'horizontal',
    icon: (
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            borderBottomColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.500'
              : 'neutral.300',
            borderBottomStyle: 'dashed',
            borderBottomWidth: 1,
            px: 1
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Box
              sx={{
                display: 'inline-flex',
                height: 12,
                width: 12
              }}
            >
              <DefaultLogo />
            </Box>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '2px',
                height: 4,
                width: 16
              }}
            />
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark'
                  ? 'neutral.600'
                  : 'neutral.300',
                borderRadius: '2px',
                height: 4,
                width: 16
              }}
            />
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark'
                  ? 'neutral.600'
                  : 'neutral.300',
                borderRadius: '2px',
                height: 4,
                width: 16
              }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            p: 1
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1,
              flex: '1 1 auto'
            }}
          />
        </Box>
      </Box>
    )
  }
];

/**
 * 
 */
export const navColorOptions: SettingsOptionValue<NavColor>[] = [
  {
    label: 'Blend-in',
    value: 'blend-in'
  },
  {
    label: 'Discreet',
    value: 'discreet'
  },
  {
    label: 'Evident',
    value: 'evident'
  }
];

/**
 * 
 */
export const directionOptions: SettingsOptionValue<Direction>[] = [
  {
    label: 'Left-to-right',
    value: 'ltr',
    icon: (
      <SvgIcon fontSize="small">
        <LeftIndent01Icon />
      </SvgIcon>
    )
  },
  {
    label: 'Right-to-left',
    value: 'rtl',
    icon: (
      <SvgIcon fontSize="small">
        <RightIndent01Icon />
      </SvgIcon>
    )
  }
];

/**
 * 
 */
export const stretchOptions: SettingsOptionValue<boolean>[] = [
  {
    label: 'Compact',
    value: false,
    icon: (
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.900'
            : 'background.paper',
          flex: '1 1 auto',
          p: 1
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
            mx: 'auto',
            width: '70%'
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1
            }}
          />
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1
            }}
          />
        </Box>
      </Box>
    )
  },
  {
    label: 'Wide',
    value: true,
    icon: (
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.900'
            : 'background.paper',
          flex: '1 1 auto',
          p: 1
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
            mx: 'auto'
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1
            }}
          />
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.800'
                : 'neutral.50',
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.500'
                : 'neutral.300',
              borderRadius: 1,
              borderStyle: 'dashed',
              borderWidth: 1
            }}
          />
        </Box>
      </Box>
    )
  }
];




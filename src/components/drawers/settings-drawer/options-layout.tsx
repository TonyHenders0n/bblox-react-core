import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material'; 
import { OptionsComponent } from './settings-drawer.types';
import React from 'react';
import { Layout } from '~/types/settings';
 
 
/**
 * 
 * @param props 
 * @returns 
 */
export const OptionsLayout: FC<OptionsComponent<Layout>> = (props) => {
  const { onChange, value, options } = props;

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Layout
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, minmax(0, 140px))'
        }}
      >
        {options?.map((option) => (
          <Stack
            key={option.value}
            spacing={1}
          >
            <Box
              onClick={() => onChange?.(option.value)}
              sx={{
                backgroundColor: (theme) => theme.palette.mode === 'dark'
                  ? 'neutral.900'
                  : 'background.paper',
                borderColor: 'divider',
                borderRadius: 1,
                borderStyle: 'solid',
                borderWidth: 2,
                cursor: 'pointer',
                display: 'flex',
                height: 88,
                ...(option.value === value && {
                  borderColor: 'primary.main'
                })
              }}
            >
              {option.icon}
            </Box>
            <Typography
              align="center"
              sx={{ fontWight: 500 }}
              variant="body2"
            >
              {option.label}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

OptionsLayout.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['horizontal', 'vertical'])
};

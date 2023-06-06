import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Stack, Typography } from '@mui/material'; 
import { OptionsComponent } from './settings-drawer.types';
import React from 'react';
 
/**
 * 
 * @param props 
 * @returns 
 */
export const OptionsColorPreset: FC<OptionsComponent<any>> = (props) => {
  const { onChange, value, options } = props;
 
  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Primary Color
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {options?.map((option) => (
          <Chip
            icon={(
              <Box
                sx={{
                  backgroundColor: option.color,
                  borderRadius: '50%',
                  flexShrink: 0,
                  height: 24,
                  width: 24
                }}
              />
            )}
            key={option.value}
            label={option.label}
            onClick={() => onChange?.(option.value)}
            sx={{
              borderColor: 'transparent',
              borderRadius: 1.5,
              borderStyle: 'solid',
              borderWidth: 2,
              ...(option.value === value && {
                borderColor: 'primary.main'
              })
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

OptionsColorPreset.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['blue', 'green', 'indigo', 'purple'])
};

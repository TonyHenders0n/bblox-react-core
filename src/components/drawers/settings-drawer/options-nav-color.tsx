import type { FC } from 'react';
import { Chip, Stack, Typography } from '@mui/material'; 
import { OptionsComponent } from './settings-drawer.types';
import { NavColor } from '~/types/settings';
import React from 'react';
 
 

export const OptionsNavColor: FC<OptionsComponent<NavColor>> = (props) => {
  const { onChange, value, options } = props;

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Nav Color
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {options?.map((option) => (
          <Chip
            key={option.label}
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

import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Chip, Stack, Typography } from '@mui/material';
 
import { OptionsComponent } from './settings-drawer.types';
import React from 'react';
import { Contrast } from '~/types/settings';
 

 
export const OptionsContrast: FC<OptionsComponent<Contrast>>  = (props) => {
  const { onChange, value, options } = props;

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Contrast
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

OptionsContrast.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['normal', 'high'])
};

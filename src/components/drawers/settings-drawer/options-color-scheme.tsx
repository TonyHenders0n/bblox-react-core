import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Chip, PaletteMode, Stack, Typography } from '@mui/material';
import { OptionsComponent } from './settings-drawer.types';
import React from 'react';

 /**
  * 
  * @param props 
  * @returns 
  */
export const OptionsColorScheme: FC<OptionsComponent<PaletteMode>> = (props) => {
  const { onChange, value, options } = props;

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Color Scheme
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {options?.map((option) => (
          <Chip
            icon={option.icon}
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

OptionsColorScheme.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['light', 'dark'])
};

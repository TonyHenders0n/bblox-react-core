import type { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import LeftIndent01Icon from '@untitled-ui/icons-react/build/esm/LeftIndent01';
import RightIndent01Icon from '@untitled-ui/icons-react/build/esm/RightIndent01';
import type { Direction } from '@mui/material';
import { Chip, Stack, SvgIcon, Typography } from '@mui/material';
import { OptionsComponent } from './settings-drawer.types';
import React from 'react';

interface DirectionOption {
  label: string;
  value: Direction;
  icon: ReactElement;
}

const options: DirectionOption[] = [
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
 

export const OptionsDirection: FC<OptionsComponent<Direction>> = (props) => {
  const { onChange, value } = props;

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Orientation
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {options.map((option) => (
          <Chip
            icon={option.icon}
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

OptionsDirection.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['ltr', 'rtl'])
};

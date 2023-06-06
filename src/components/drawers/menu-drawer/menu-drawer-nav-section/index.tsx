import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';
import { MenuDrawerNavItem } from '../menu-drawer-nav-item';
import { MenuDrawerNavSectionProps as MenuDrawerNavSectionProps, NavSectionItem } from '../menu-drawer.types';
import React from 'react';

 

const renderItems = ({
  depth = 0,
  items,
  pathname
}: {
  depth?: number;
  items: NavSectionItem[];
  pathname?: string | null;
}): JSX.Element[] => items.reduce(
  (acc: JSX.Element[], item) => reduceChildRoutes({
    acc,
    depth,
    item,
    pathname
  }),
  []
);

const reduceChildRoutes = ({
  acc,
  depth,
  item,
  pathname
}: {
  acc: JSX.Element[];
  depth: number;
  item: NavSectionItem;
  pathname?: string | null;
}): Array<JSX.Element> => {
  const checkPath = !!(item.path && pathname);
  const partialMatch = checkPath ? pathname.includes(item.path!) : false;
  const exactMatch = checkPath ? pathname === item.path : false;

  if (item.items) {
    acc.push(
      <MenuDrawerNavItem
        active={partialMatch}
        depth={depth}
        disabled={item.disabled}
        icon={item.icon}
        key={item.title}
        label={item.label}
        open={partialMatch}
        title={item.title}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0
          }}
        >
          {renderItems({
            depth: depth + 1,
            items: item.items,
            pathname
          })}
        </Stack>
      </MenuDrawerNavItem>
    );
  } else {
    acc.push(
      <MenuDrawerNavItem
        active={exactMatch}
        depth={depth}
        disabled={item.disabled}
        external={item.external}
        icon={item.icon}
        key={item.title}
        label={item.label}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};


/**
 * 
 * @param props 
 * @returns 
 */
export const MenuDrawerNavSection: FC<MenuDrawerNavSectionProps> = (props) => {
  const { items = [], pathname, subheader = '', ...other } = props;

  return (
    <Stack
      component="ul"
      spacing={0.5}
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0
      }}
      {...other}
    >
      {subheader && (
        <Box
          component="li"
          sx={{
            color: 'var(--nav-section-title-color)',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1.66,
            mb: 1,
            ml: 1,
            textTransform: 'uppercase'
          }}
        >
          {subheader}
        </Box>
      )}
      {renderItems({ items, pathname })}
    </Stack>
  );
};

MenuDrawerNavSection.propTypes = {
  items: PropTypes.array,
  pathname: PropTypes.string,
  subheader: PropTypes.string
};

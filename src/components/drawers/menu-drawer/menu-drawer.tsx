import type { FC } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer as MuiDrawer,
  Stack,
} from "@mui/material";
// import { Logo } from "src/components/logo";
// import { RouterLink } from "src/_migrate/components/navigation/link/router-link";
// import { Scrollbar } from "src/components/scrollbar";
// import { usePathname } from "src/hooks/use-pathname"; 
import type { NavColor } from "~/types/settings"; 
import { MenuDrawerNavSection } from "./menu-drawer-nav-section";
import { MenuDrawerProps } from "./menu-drawer.types";
import { usePathname } from '~/hooks';
import { Scrollbar } from '~/components/scrollbar';
import React from 'react';
import { RouterLink } from '~/components/navigation/router-link/router-link';
import { DefaultLogo } from '~/components/logo/default-logo';
 
 
/**
 * 
 * @param props 
 * @returns 
 */
export const MenuDrawer: FC<MenuDrawerProps> = (props) => {
  const {
    sections = [], 
    indexPath ="/",
    drawerStyle,
    drawerContent, 
    isMobile,
    open,
    onClose,

  } = props;
  const pathname = usePathname();

  const logo = drawerContent?.logo;

  return (
    <MuiDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          ...(drawerStyle?.paper?.cssVars || {}),
          ...(drawerStyle?.paper?.cssStyles || {}),
        },
      }} 
      variant={isMobile ? "temporary" : "permanent"}
    >
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
          "& .simplebar-scrollbar:before": {
            background: "var(--nav-scrollbar-color)",
          },
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ p: 3 }}
          > 
            <Box
              component={RouterLink}
              href={indexPath}
              sx={{
                borderColor: "var(--nav-logo-border)",
                borderRadius: 1,
                borderStyle: "solid",
                borderWidth: 1,
                display: "flex",
                height: 40,
                p: "4px",
                width: 40,
              }}
            >
              { logo ? logo : <DefaultLogo /> } 
            </Box>
            {drawerContent?.headerContent ? drawerContent?.headerContent : null}
            {/* <TenantSwitch sx={{ flexGrow: 1 }} /> */}
          </Stack>
          <Stack
            component="nav"
            spacing={2}
            sx={{
              flexGrow: 1,
              px: 2,
            }}
          >
            {sections.map((section, index) => (
              <MenuDrawerNavSection
                items={section.items}
                key={index}
                pathname={pathname}
                subheader={section.subheader}
              />
            ))}
          </Stack>
          {drawerContent?.footerContent ? drawerContent?.footerContent : null}
          {/* <Box sx={{ p: 3 }}>
            <Typography variant="subtitle1">Need help?</Typography>
            <Typography
              color="neutral.400"
              sx={{ mb: 2 }}
              variant="body2"
            >
              Please check our docs.
            </Typography>
            <Button
              component="a"
              fullWidth
              href={paths.docs}
              startIcon={
                <SvgIcon>
                  <File04Icon />
                </SvgIcon>
              }
              target="_blank"
              variant="contained"
            >
              Documentation
            </Button>
          </Box> */}
        </Stack>
      </Scrollbar>
    </MuiDrawer>
  );
};

MenuDrawer.propTypes = {
  color: PropTypes.oneOf<NavColor>(["blend-in", "discreet", "evident"]),
  sections: PropTypes.array,
};

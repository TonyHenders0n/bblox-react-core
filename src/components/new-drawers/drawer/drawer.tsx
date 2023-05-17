import type { FC } from "react";
import PropTypes from "prop-types";
import { Box, Drawer as MuiDrawer, Stack } from "@mui/material";

import { DrawerNavSection } from "../drawer-nav-section/drawer-nav-section";
import { DrawerProps } from "../drawer.types";
import { Scrollbar } from "~/components/scrollbar";
import { RouterLink } from "~/components/navigation/router-link/router-link";
import { DefaultLogo } from "~/components/logo/default-logo";
import { usePathname } from "~/hooks/path/pathname.hooks";
import React from "react";

/**
 *
 * @param props
 * @returns
 */
export const Drawer: FC<DrawerProps> = (props) => {
  const {
    sections = [],
    indexPath = "/",
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
              {logo ? logo : <DefaultLogo />}
            </Box>
            {drawerContent?.headerContent ? drawerContent?.headerContent : null}
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
              <DrawerNavSection
                items={section.items}
                key={index}
                pathname={pathname}
                subheader={section.subheader}
              />
            ))}
          </Stack>
          {drawerContent?.footerContent ? drawerContent?.footerContent : null}
        </Stack>
      </Scrollbar>
    </MuiDrawer>
  );
};

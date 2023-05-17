import { Stack } from "@mui/system";
import React from "react";
import { DrawerSection } from "../drawer-section";
import { DrawerContentComponent, DrawerContentProps } from "../drawer.types";
 
/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({
  nav: { items },
  size = "medium",
  sections = [],
}: DrawerContentProps) => {
  return (
    <>
      <Stack
        component="nav"
        spacing={2}
        sx={{
          flexGrow: 1,
          px: 2,
        }}
      >
        {sections.map((section, index) => (
          <DrawerSection
            subheader={section.subheader}
            key={index}
            title={section.subheader}
            items={section.items}
            // items={items}
            size={size}
          />
        ))}
      </Stack> 
    </>
  );
};
 
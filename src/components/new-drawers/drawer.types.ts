import { CSSObject, DrawerProps as MuiDrawerProps } from "@mui/material";
import { ReactNode } from "react";

// import { NavColor } from "src/types/settings";

export interface DrawerStyleProps {
  paper?: {
    cssVars?: Record<string, string>;
    cssStyles?: CSSObject;
  };
  cssVars?: Record<string, string>;
  cssStyles?: CSSObject;
  color?: any; //NavColor
}

export interface DrawerContent {
  logo?: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}

export interface DrawerProps extends MuiDrawerProps { 
  sections?: Section[];
  indexPath?: string;
  drawerWidth?: number; 
  drawerStyle?: DrawerStyleProps; 
  drawerContent?: DrawerContent;
  isMobile?: boolean; // mobile mode
  onClose?: () => void; // mobile drawer
  open?: boolean; // mobile drawer
}

/**
 *
 */
export interface DrawerNavSectionProps {
  items?: SectionItem[];
  pathname?: string | null;
  subheader?: string;
}

/**
 *
 */
export interface SectionItem {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: SectionItem[];
  label?: ReactNode;
  path?: string;
  title: string;
}

/**
 *
 */
export interface Section {
  items: SectionItem[];
  subheader?: string;
}

/**
 *
 */
export interface DrawerNavItemProps {
  active?: boolean;
  children?: ReactNode;
  depth?: number;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

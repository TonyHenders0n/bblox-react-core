import { CSSObject, DrawerProps as MuiDrawerProps } from "@mui/material";
import { ReactNode } from "react";

import { NavColor } from "~/types/settings";

export interface DrawerStyleProps {
  paper?: {
    cssVars?: Record<string, string>;
    cssStyles?: CSSObject;
  };
  cssVars?: Record<string, string>;
  cssStyles?: CSSObject;
  color?: NavColor;
} 

/**
 * 
 */
export interface DrawerContent {
  logo?: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}

/**
 * 
 */
export interface MenuDrawerProps extends MuiDrawerProps { 
  sections?: NavSection[];
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
export interface MenuDrawerNavSectionProps {
  items?: NavSectionItem[];
  pathname?: string | null;
  subheader?: string;
}

/**
 *
 */
export interface NavSectionItem {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: NavSectionItem[];
  label?: ReactNode;
  path?: string;
  title: string;
}

/**
 *
 */
export interface NavSection {
  items: NavSectionItem[];
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

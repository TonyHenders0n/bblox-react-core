import React from "react";
import {
  SxProps,
  Theme,
  drawerClasses,
  styled,
  Drawer as MuiDrawer,
  IconButton,
  useTheme,
  paperClasses, 
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"; 
import { useDrawer } from "../drawer-provider/drawer-context"; 
import { Scrollbar } from "src/components/scrollbar";
import { closedMixin, openedMixin } from "../drawer-provider/drawer-mixins";
import { DrawerComponent, DrawerProps, DrawerState, DrawerVariant } from "../drawer.types";
 

// export const DrawerHeader = styled("div")(({ theme }) => ({}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const showCloseButton: Record<DrawerVariant, boolean> = {
  temporary: true,
  mini: true,
  persistent: true,
  clipped: false,
};

const muiDrawerVariant: Record<
  DrawerVariant,
  "permanent" | "persistent" | "temporary"
> = {
  temporary: "temporary",
  mini: "permanent",
  clipped: "permanent",
  persistent: "persistent",
};

type SxGenerator = (state: DrawerState, theme: Theme) => SxProps<Theme>;
const NoopSxGenerator = () => ({});
const variantsSx: Readonly<Record<DrawerVariant, SxGenerator>> = {
  mini: (state: DrawerState, theme: Theme) => ({
    boxSizing: "border-box",
    [`& .${paperClasses.root}`]: {
      zIndex: theme.zIndex.drawer - 1,
    },
  }),
  temporary: NoopSxGenerator,
  clipped: NoopSxGenerator,
  persistent: NoopSxGenerator,
};

export const Drawer: DrawerComponent = ({
  children,
  drawerStyleProps,
  ...rest
}: DrawerProps) => {
  const theme = useTheme();
  const { state, switchState, underAppBar, close, variant, drawerWidth } =
    useDrawer();
  console.log("drawerWidth", drawerWidth);

  const defaultDrawerWidth = drawerWidth || 280;

  const sx: any = {
    width: defaultDrawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...(state === "open" && {
      ...openedMixin(theme, defaultDrawerWidth),
      [`& .${drawerClasses.paper}`]: openedMixin(theme, defaultDrawerWidth),
    }),
    ...(state !== "open" && {
      ...closedMixin(theme),
      [`& .${drawerClasses.paper}`]: closedMixin(theme),
    }),
    ...(drawerStyleProps?.cssVars || {}),
    ...(drawerStyleProps?.cssStyles || {}),
    ...variantsSx[variant](state, theme),
  };

  return (
    <MuiDrawer
      open={state === "open"}
      variant={muiDrawerVariant[variant]}
      role="menu"
      aria-hidden={state === "close"}
      onClose={close}
      PaperProps={{
        sx: {
          ...(drawerStyleProps?.paper?.cssVars || {}),
          ...(drawerStyleProps?.paper?.cssStyles || {}),
        },
      }}
      sx={sx}
      {...rest}
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
        <DrawerHeader>
          {/* {state === "open" && (
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ p: 3 }}
            >
              <Box
                component={RouterLink}
                href={paths.index}
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
                <Logo />
              </Box>
              <TenantSwitch sx={{ flexGrow: 1 }} />
            </Stack>
          )} */}
          {!underAppBar && showCloseButton[variant] && (
            <IconButton onClick={switchState}>
              <ChevronLeftIcon />
            </IconButton>
          )}
 
        </DrawerHeader>
        {/* <Divider /> */}
        {children}
      </Scrollbar>
    </MuiDrawer>
  );
};

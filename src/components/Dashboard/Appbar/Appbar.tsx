"use client";

import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { AppBar, Avatar, Badge, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AccountMenu from "../AccountMenu/AccountMenu";

type Tprops = {
  drawerWidth: number;
  mobileOpen: boolean;
  isClosing: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
};

function AppTopBar({
  drawerWidth,
  mobileOpen,
  isClosing,
  setMobileOpen,
  setIsClosing,
}: Tprops) {
  const { data, isLoading } = useGetMyProfileQuery({});

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#F6F5F2",
        boxShadow: 0,
        borderBottom: "1px solid #ddd",
        py: 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              noWrap
              component="h1"
              sx={{ color: "#9333EA", fontFamily: "Mukta", fontSize: 30 }}
            >
              Hi, {isLoading ? "Loading..." : data?.name}
            </Typography>
          </Box>
          <Stack direction="row" gap={3}>
            <Badge badgeContent={1} color="primary">
              <IconButton sx={{ background: "#ffffff" }}>
                <NotificationsNoneIcon color="action" />
              </IconButton>
            </Badge>
            <Avatar alt={data?.name} src={data?.profilePhoto} />
            <AccountMenu />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default AppTopBar;

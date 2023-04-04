import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "../flexbetween/FlexBetween";
import { useDispatch } from "react-redux";
//import { setMode } from "state";
import profileImage from "assets/react.svg";
import {
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*LEFT SIDE*/}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>
        <FlexBetween
          color={theme.palette.background.default}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem">
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

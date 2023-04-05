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
import { setMode } from "../../../redux/slices/globalSlice";
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
        {/*RIGHT SIDE*/}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={()=>dispatch(setMode())}>
            {theme.palette.mode==='dark'?(
              <DarkModeOutlined sx={{fontSize:"25px"}}/>
            ):(
              <LightModeOutlined sx={{fontSize:"25px"}}/>
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{fontSize:"25px"}}/>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

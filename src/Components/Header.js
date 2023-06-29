import * as React from "react";
import { Box, AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import "./Header.css";
import logo from "../Assets/logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import region from "../Assets/region-24.png";

function Header() {
  return (
    <>
      <Box>
        <AppBar className="app" position="static">
          <Toolbar>
            <Typography className="nav" sx={{ flexGrow: 1 }}>
              <a href="https://driffle.com/">
                <img src={logo} alt="Driffle" />
              </a>
            </Typography>

            <Stack direction="row">
              <Button className="region">
                <img src={region} alt="region" />
                <p className="text">India (English) - INR</p>
              </Button>
              <Button className="button">
                <FavoriteIcon />
              </Button>
              <Button className="button">
                <LocalMallIcon />
              </Button>
              <Button className="button">
                <AccountCircleIcon />
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;

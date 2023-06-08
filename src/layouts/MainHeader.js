import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function MainHeader() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { user } = useAuth();
  console.log(auth);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            XiNgau Store
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            Welcome {user?.username}!
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginLeft: "5px" }}
            onClick={() => {
              auth.logout(() => navigate("/"));
            }}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;

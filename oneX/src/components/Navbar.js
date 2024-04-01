import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "@mui/material";
import logo from "../onex-Assets/onex-logo.svg";
const pages = [
  { navName: " What It Is", navLink: "/" },
  { navName: "How It Works", navLink: "/" },
  { navName: "FAQs", navLink: "/" },
  { navName: "Contact Us", navLink: "/" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        margin: "30px 0",
      }}>
      <Container
        maxWidth="xl"
        sx={{ bgcolor: "#C32051", padding: "15px 0", borderRadius: "10px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <img src={logo} alt="img" />
          </Typography>
          {/* Mobile Mode */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page.navLink} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.navName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo In Mobile Mode */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center", // Center the logo and mobile menu icon
            }}>
            <img src={logo} width="200px" alt="img" />
          </Typography>
          {/* Desktop Mode */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center", // Center the navigation links horizontally
            }}>
            {pages.map((page) => (
              <Link
                key={page.navLink}
                href={page.navLink}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 2,
                  my: 2,
                  color: "#F4F4F4",
                  textDecoration: "none",
                  fontWeight: "500",
                  "&:hover": {
                    transition: "0.3s ease-in-out",
                    color: "lightgray",
                  },
                }}>
                {page.navName}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                sx={{
                  color: "#B84165",
                  bgcolor: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: { xs: "4px 20px", md: "6px 30px" },
                  textTransform: "capitalize",
                  "&:hover": { bgcolor: "lightgray" },
                }}>
                <PersonOutlineOutlinedIcon />
                Login
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

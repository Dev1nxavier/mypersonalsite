import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useScrollTrigger, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#444444",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));


function ScrollOnTrigger(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#fff" : "transparent",
      opacity: trigger ? 1 : 0.9,
    },
  });
}

export default function MyAppBar(props) {
  const { currentPage, ...others } = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const pages = [
    // { name: "Home", page: "/index" },
    { name: "Home", page: "/" },
    { name: "About", page: "/about" },
    { name: "Portfolio", page: "/portfolio" },
    { name: "Articles", page: "/blog" },
    { name: "Contact", page: "/contact" },
  ];

  return (
    <ScrollOnTrigger {...props}>
      <AppBar position="sticky" sx={{ flex: 1 }}>
        <Container maxWidth="xl">
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ py: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: "flex" }, flexDirection: "row" }}>
              <Typography
                variant="span"
                sx={{ color: "#b69351", fontWeight: "bolder", fontSize: "2em" }}
              >
                S
              </Typography>
              <Typography
                variant="h6"
                sx={{ position: "relevant", left: -10, color: "green" }}
              >
                greene
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: "space-around", display: { xs: 'none', md: 'flex' }, mx: 10 }}>
              {pages.map((page, index) => (
                <Link
                  noWrap
                  key={page.name}
                  variant="body2"
                  href={`${page.page}`}
                  sx={{
                    px: 3,
                    color: page.name === currentPage ? "#b69351" : '#000000',
                    
                    textDecoration: page.name===currentPage? "underline":"none",
                    fontFamily: "Merienda",
                    fontSize: "1.2em",
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}

              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} sx={{ textDecoration: 'none' }} onClick={handleCloseNavMenu}>
                    <Link
                      noWrap
                      key={page.name}
                      variant="body2"
                      href={`${page.page}`}
                      sx={{
                        px: 3,
                        color: page.name === currentPage ? "#b69351" : '#000000',
                        flexShrink: 0,
                        textDecoration: "none",
                        fontFamily: "Merienda",
                        fontSize: "1.2em",

                      }}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: "none" }, flexDirection: "row" }}>
              <Typography
                variant="span"
                sx={{ color: "#b69351", fontWeight: "bolder", fontSize: "2em" }}
              >
                S
              </Typography>
              <Typography
                variant="h6"
                sx={{ position: "relevant", left: -10, color: "green" }}
              >
                greene
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollOnTrigger>
  );
}

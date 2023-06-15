import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, createTheme,  ThemeProvider, Button, Toolbar, AppBar } from "@mui/material";


const pages = [
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {

    const theme = createTheme({
        typography: {
          fontFamily: [
            "Fraunces",
            "serif",
          ].join(","),
        },
      });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
     <ThemeProvider theme={theme}>
    <AppBar position="static" sx={{ backgroundColor: 'skyblue' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'teal',
              textDecoration: 'none',
            }}
          >
            Siv Earley
          </Typography>

          <div style={{ flex: 1 }}></div>

          <Button
            component={Link}
            to="/projects"
            sx={{ my: 2, color: 'teal', display: 'block' }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ my: 2, color: 'teal', display: 'block' }}
          >
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;


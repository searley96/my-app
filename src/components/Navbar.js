import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
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
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
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
              fontFamily: 'monospace',
              fontWeight: 700,
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
  );
}

export default Navbar;


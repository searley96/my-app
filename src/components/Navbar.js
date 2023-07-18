import * as React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Button,
  Toolbar,
  AppBar,
} from "@mui/material";
import "./NavBar.css"; // Import the custom CSS file

function Navbar() {
  // Create a custom theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Fraunces", "serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static" // Set the position of the AppBar
        sx={{
          backgroundColor: "#027353", // Set the background color
          boxShadow: "none", // Remove the box shadow
        }}
        elevation={0} // Set the elevation of the AppBar
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters // Disable the default gutters for the Toolbar
            sx={{
              alignItems: "center", // Align the items in the Toolbar to the center
            }}
          >
            {/* Typography component for the logo */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mt: 2, // Set the margin-top of the Typography component
                mr: 2, // Set the margin-right of the Typography component
                display: { xs: "none", md: "flex" }, // Set the display property for different screen sizes
                fontWeight: 1000, // Set the font weight of the Typography component
                letterSpacing: ".3rem", // Set the letter spacing of the Typography component
                color: "#f2ffb2", // Set the color of the Typography component
                textDecoration: "none", // Set the text decoration of the Typography component
                display: "block", // Set the display property of the button
                "&:hover": {
                  color: "#EBA937", // Set the color on hover for the button
                },
              }}
            >
              Siv Earley
            </Typography>
            <div style={{ flex: 1 }}></div>{" "}
            {/* Empty div to push the buttons to the right side of the Toolbar */}
            {/* Button component for "Projects" */}
            <Button
              component={Link}
              to="/projects"
              sx={{
                border: 2,
                mt: 2, // Set the margin-top of the button
                mx: 1, // Set the margin-left and margin-right of the button
                color: "#f2ffb2", // Set the color of the button
                display: "block", // Set the display property of the button
                "&:hover": {
                  color: "#EBA937", // Set the color on hover for the button
                },
              }}
            >
              Projects
            </Button>
            {/* Button component for "Contact" */}
            <Button
              component={Link}
              to="/contact"
              sx={{
                border: 2,
                mt: 2, // Set the margin-top of the button
                mx: 1, // Set the margin-left and margin-right of the button
                color: "#f2ffb2", // Set the color of the button
                display: "block", // Set the display property of the button
                "&:hover": {
                  color: "#EBA937", // Set the color on hover for the button
                },
              }}
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

import * as React from "react";
import {
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "@fontsource/fraunces/700.css"; // Import the Fraunces font
import AboutAccordion from "./AboutAccordion";
import "../../lato.css";

function About() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fraunces", "serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <img
          src="../images/orangeflower.png"
          alt="orangeFlower"
          width="200px"
          height="200px"
        />
        <div
          style={{
            marginTop: "10px", // Adjust the marginTop to move both divs down
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "500px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
            align="center"
            variant="h1"
            color="
            #F05A28"
          >
            Welcome! I'm Siv.
          </Typography>
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              {/* Left side content */}
              <Container maxWidth="sm">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingTop: "90px",
                    marginTop: 0,
                  }}
                  align="left"
                  variant="h5"
                  color="
                  #EBA937"
                >
                  I'm a full-stack software engineer based in Minneapolis, MN. I
                  strive to merge my eye for design and coding skills to create
                  playful yet impactful projects. When I'm not coding, you may
                  find me reading, strolling through a park, or playing with my
                  cat.
                </Typography>
              </Container>
            </div>
            <div style={{ marginLeft: "10px" }}>
              {/* Right side content */}
              <AboutAccordion />
            </div>
          </div>
        </div>
        <img
              src="../images/greenflower.png"
              alt="greenFlower"
              width="200px"
              height="200px"
            />
      </ThemeProvider>
    </>
  );
}

export default About;

import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import '@fontsource/fraunces/700.css'; // Import the Fraunces font
import AboutAccordion from './AboutAccordion';
import './AboutPage.css'; // Import the custom CSS file
import '../../lato.css';

function About() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Fraunces', 'serif'].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            marginTop: '150px', // Adjust the marginTop to move both divs down
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '500px',
          }}
        >
          <Typography
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
            align="center"
            variant="h2"
            color="rgb(197, 75, 53)"
          >
            Welcome! I'm Siv.
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ marginRight: '10px' }}>
              {/* Left side content */}
              <Container maxWidth="sm">
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    paddingTop: '90px',
                    marginTop: 0,
                  }}
                  align="left"
                  variant="h6"
                  color="rgb(197, 75, 53)"
                >
                  I'm a full-stack software engineer based in Minneapolis, MN.
                  <br />
                  I strive to merge my eye for design and coding skills to create
                  playful yet impactful projects.
                  <br />
                  When I'm not coding, you may find me reading, strolling through
                  a park, or playing with my cat.
                </Typography>
              </Container>
            </div>
            <div style={{ marginLeft: '10px' }}>
              {/* Right side content */}
              <AboutAccordion />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default About;











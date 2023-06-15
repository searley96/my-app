import { Typography, Container, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/fraunces/700.css"; // Import the Fraunces font


function About() {
    const theme = createTheme({
        typography: {
          fontFamily: [
            "Fraunces",
            "serif",
          ].join(","),
        },
      });

  return (
    <ThemeProvider theme={theme} >
         <div
        style={{
          backgroundColor: "skyblue", // background color
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Container maxWidth="sm"  >
        <Typography
          sx={{ fontWeight: "bold"}}
          align="center"
          variant="h4"
          color="#f3e5f5"
        >
          Welcome! I'm Siv.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", mt: 5 }}
          align="center"
          variant="h6"
          color="teal"
        >
          I'm a full-stack software engineer based in Minneapolis, MN. <br />
          I strive to merge my eye for design and coding skills to create playful yet impactful projects. <br />
          When I'm not coding, you may find me reading, strolling through a park, or playing with my cat.
        </Typography>
      </Container>
      </div>
    </ThemeProvider>
  );
}

export default About;
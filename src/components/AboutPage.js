import { Typography, Container, createTheme, ThemeProvider } from "@mui/material";
import "typeface-cormorant";

function About() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Cormorant",
        "serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Typography
          sx={{ fontWeight: "bold", mt: 10 }}
          align="center"
          variant="h4"
          color="teal"
        >
          Welcome! I'm Siv.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", mt: 5 }}
          align="center"
          variant="h6"
          color="black"
        >
          I'm a full-stack software engineer currently living in Minneapolis, MN. <br />
          I strive to merge my love of design with my coding skills to create playful yet impactful projects. <br />
          When I'm not coding, you may find me reading, strolling through a park, or playing with my cat.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default About;
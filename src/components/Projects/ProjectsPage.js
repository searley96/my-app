import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, createTheme, ThemeProvider, Grid } from "@mui/material";
import "@fontsource/fraunces/700.css"; // Import the Fraunces font

function Projects() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fraunces", "serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
      <Typography   sx={{ fontWeight: "bold", mt: 10 }}
        align="center"
        variant="h4"
        color="teal"

      >Projects</Typography>

<Grid item xs={4}>
      <Card sx={{ maxWidth: 345, mt: 10, ml: 10, color: "teal", fontSize:"5" }}>
        <CardActionArea  href="https://github.com/searley96/prime-solo-project" target="_blank">
          <CardMedia
            component="img"
            height="175"
            image="./images/mash.png"
            alt="M.A.S.H."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ maxWidth: 345 }}>
              M.A.S.H. 2.0: Future Fortunes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A digital adaptation of the classic childhood game, M.A.S.H.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default Projects;

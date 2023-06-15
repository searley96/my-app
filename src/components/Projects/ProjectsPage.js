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
        <Typography
          sx={{ fontWeight: "bold", mt: 10 }}
          align="center"
          variant="h4"
          color="teal"
        >
          Projects
        </Typography>

        <Grid container spacing={15} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 400,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mt: 10,
                color: "teal",
                fontSize: "5",
              }}
            >
              <CardActionArea
                href="https://github.com/searley96/prime-solo-project"
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="100%"
                  image="./images/mash.png"
                  alt="M.A.S.H."
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ paddingTop: 2, paddingBottom: 1  }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ maxWidth: 345 }}
                  >
                    M.A.S.H. Future Fortunes
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, lineHeight: 1.2 }}>
                    A digital adaptation of the classic childhood game, M.A.S.H.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 400,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mt: 10,
                color: "teal",
                fontSize: "5",
              }}
            >
              <CardActionArea
                href="https://github.com/searley96/Honey-Does-App"
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="100%"
                  image="./images/honeydoes.png"
                  alt="HoneyDoes"
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ paddingTop: 2, paddingBottom: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ maxWidth: 345 }}
                  >
                    HoneyDoes LLC Mobile App
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, lineHeight: 1.2 }}>
                    Built with a team.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Projects;



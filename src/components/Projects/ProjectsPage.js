import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import "@fontsource/fraunces/700.css"; // Import the Fraunces font

function Projects() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fraunces", "serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{ fontWeight: "bold", mt: 10 }}
        align="center"
        variant="h4"
        color="#F05A28"
      >
        Projects
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", mt: 2 }}
        align="center"
        variant="h6"
        color="#f2ffb2"
      >
        Click on the image to explore my work on GitHub!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 2,
            color: "#F05A28",
          }}
        >
          <CardActionArea
            href="https://github.com/searley96/prime-solo-project"
            target="_blank"
          >
            <CardMedia
              component="img"
              height={200}
              width="100%"
              image="./images/mash.png"
              alt="M.A.S.H."
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                M.A.S.H. Future Fortunes
              </Typography>
              <Typography variant="body2" >
                A digital adaptation of the classic childhood game, M.A.S.H.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 4,
            color: "#F05A28",
          }}
        >
          <CardActionArea
            href="https://github.com/searley96/Honey-Does-App"
            target="_blank"
          >
            <CardMedia
              component="img"
              height={200}
              width="100%"
              image="./images/honeydoes.png"
              alt="HoneyDoes"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                HoneyDoes LLC Mobile App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prototype app for a small business. Built with a team over a three-week sprint.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 4,
            color: "teal",
          }}
        >
          <CardActionArea
            href="https://github.com/searley96/weekend-movie-sagas"
            target="_blank"
          >
            <CardMedia
              component="img"
              height={200}
              width="100%"
              image="./images/movies.png"
              alt="Movies"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Movies Saga
              </Typography>
              <Typography variant="body2" >
                Displays a gallery of movie images on the home page and movie details when an individual movie is clicked.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 4,
            color: "",
            mb: 10
          }}
        >
          <CardActionArea
            href="https://github.com/searley96/weekend-redux-feedback-loop"
            target="_blank"
          >
            <CardMedia
              component="img"
              height={200}
              width="100%"
              image="./images/feedback.png"
              alt="HoneyDoes"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Feedback Loop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Takes in your feedback and saves it to a database, displaying all answers at the end.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Projects;






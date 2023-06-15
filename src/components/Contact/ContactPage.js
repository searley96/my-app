import { Typography, Box, createTheme, ThemeProvider, } from '@mui/material';
import ContactForm from './ContactForm';
import "@fontsource/fraunces/700.css"; // Import the Fraunces font


function Contact () {

    const theme = createTheme({
        typography: {
          fontFamily: [
            "Fraunces",
            "serif",
          ].join(","),
        },
      });

    return(
        <>
        <ThemeProvider theme={theme}>
        <Box>
        <Typography   sx={{ fontWeight: "bold", mt: 10 }}
        align="center"
        variant="h4"
        color="teal"

      >
            Contact
        </Typography>
        </Box>
        <Box>
            <Typography sx={{ mt: 6 }}
        align="center"
        variant="h6"
        color="teal">
                Currenly available for remote opportunies and work in Minneapolis, MN. 
            </Typography>
        </Box>
        <Box>
            <Typography sx={{ mt: 6 }}
        align="center"
        variant="h6"
        color="teal">
            
            </Typography>
        </Box>
        <ContactForm />
        </ThemeProvider>
        </>
    )
}

export default Contact;
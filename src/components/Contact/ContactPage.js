import { Typography, Box, createTheme, ThemeProvider, } from '@mui/material';
import ContactForm from './ContactForm';
import "@fontsource/fraunces/700.css"; // Import the Fraunces font
import './Contact.css'; // Import the custom CSS file


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
        variant="h2"
        color="#F05A28"

      >
            Contact
        </Typography>
        </Box>
        <Box>
            <Typography sx={{ mt: 6 }}
        align="center"
        variant="h6"
        color="#EBA937">
                Currenly available for remote opportunies and work in the Twin Cities, MN. <br>
                </br> Let's connect!
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
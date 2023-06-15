import { Typography, Box } from '@mui/material';
import ContactForm from './ContactForm';

function Contact () {
    return(
        <>
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
        color="black">
                Currenly open for work and accepting projects in Minneapolis, MN and remotely. 
            </Typography>
        </Box>
        <Box>
            <Typography sx={{ mt: 6 }}
        align="center"
        variant="h6"
        color="black">
            
            </Typography>
        </Box>
        <ContactForm />
        </>
    )
}

export default Contact;
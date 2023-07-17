import "./AboutAccordion.css";
import React, { useState } from 'react';
import "@fontsource/fraunces/700.css"; // Import the Fraunces font
import { Typography, Container, createTheme, ThemeProvider } from "@mui/material";

function AboutAccordian() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Fraunces",
        "serif",
      ].join(","),
    },
  });
  const accordionData = [
    {
      title: 'Work Experience',
      content: [
        `Full-Stack Software Developer Student - Prime Digital Academy`,
        `Jan 2023 - June 2023`,
        `Minneapolis, MN`,
        `Solo Project: MASH App`,
        `M.A.S.H. (Mansion, Shack, House, Apartment) App is a digital adaptation of a childhood game that “predicts your future”. M.A.S.H. App provides a creative and imaginative experience that invites users to envision exciting, silly, or outrageous possibilities for their futures. The app gives users an opportunity to relive childhood memories, enjoy some nostalgia, and have some lighthearted fun.`,
        `Technologies used: JavaScript, Node, Express, React, Redux, PostgreSQL, HTML, CSS, Heroku, GSAP`,
        `Group Project: Honey Does LLC App`,
        `Created an app for a small cleaning company that allows new users to fill out cleaning forms in order to receive a cleaning estimation for their place of residence. App features a chat function that enables clients and cleaners to communicate during active cleans, forms, and dashboards that vary depending on whether the user is a client or an admin.`,
        `Technologies used: JavaScript, Node, Express, React, Redux, PostgreSQL, MUI, Jira`,
        '',
        `-`,
        '',
        `Substitute Teacher - Minneapolis Public Schools`,
        `Jan 2022 - Jan 2023`,
        `Minneapolis, Minnesota`,
        `Fostered a safe, inclusive, and comfortable learning environment for the diverse needs and learning styles of students from varied cultural backgrounds and abilities`,
        `Supported students through completing and comprehending a variety of learning objectives`,
        `Successfully navigated unforeseen disruptions to lessons, like student absences and technology failures, by employing creative solutions and modifying lesson plans to ensure continued learning`,
        '',
        `-`,
        '',
        `Baker - Bloom Bake Shop`,
        `Feb 2019 - Jul 2021`,
        `Madison, Wisconsin`,
        `Demonstrated exceptional time-management skills by efficiently prioritizing tasks and meeting tight baking deadlines without compromising quality`,
        `Played an integral role in a baking team by effectively communicating with coworkers and consistently meeting daily quotas`,
        `Developed innovative solutions to unexpected baking challenges, such as ingredient shortages or equipment malfunctions, resulting in successful completion of all baking projects`,
        `Consistently produced attractive and delicious baked goods by meticulously following recipes and identifying and correcting errors and inconsistencies`,
      ],
    },
    {
      title: 'Education',
      content: [
        `Prime Digital Academy`,
        `Full Stack Software Engineering Certification`,
        `June 2023`,
        `20-week immersion program specializing in developing software engineering mastery across the full stack to provide relevant and in-demand competencies`,
        `Coursework includes professional skills enhancement including real-world client projects, weekly presentation and public speaking practice, and diversity, equity and inclusion training`,
        '',
        `-`,
        '',
        `University of Wisconsin - Madison`,
        `Madison, WI`,
        `Class of 2021`,
        `Bachelor of Arts in Psychology`,
        `Certificate in Gender Studies`,
      ],
    },
    {
      title: 'Skills',
      content: [
        `CSS`,
        `HTML`,
        `JavaScript`,
        `jQuery`,
        `React`,
        `Redux`,
        `Sagas`,
        `Node`,
        `Express`,
        `SQL`,
        `Postgres`,
        `MUI`,
      ],
    },
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="accordion">
        {accordionData.map((accordionItem, index) => (
  <div className="accordion-item" key={index}>
    <div
      className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => handleAccordionClick(index)}
    >
      <Typography variant="h4" component="div" color="rgb(197, 75, 53)">
        {accordionItem.title}
      </Typography>
    </div>
    {activeIndex === index && (
  <div className="accordion-content">
    <Typography variant="body1" component="div" color="rgb(197, 75, 53)">
      {accordionItem.content.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph}</p>
          {index !== accordionItem.content.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Typography>
  </div>
)}
  </div>
))}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default AboutAccordian;




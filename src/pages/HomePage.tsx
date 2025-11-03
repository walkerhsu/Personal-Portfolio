import { Container, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        color: "black",
        textAlign: "right",
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "40px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.55)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          }}
        >
          Ching-Yu, Hsu
        </Typography>
        <Typography
          component="h2"
          gutterBottom
          sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }}
        >
          AI Enthusiast | Software Engineer
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" } }}
        >
          <SchoolIcon /> National Taiwan University
        </Typography>
        <Typography
          variant="body1"
          maxWidth="50%"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            ml: "auto",
          }}
        >
          I am a passionate developer with experience in building web
          applications and exploring the world of AI. I am always eager to learn
          new technologies and apply them to solve real-world problems.
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;

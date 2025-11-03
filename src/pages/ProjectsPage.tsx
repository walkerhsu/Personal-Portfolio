import { Container, Box } from "@mui/material";
import Projects from "../components/sections/Projects";

const ProjectsPage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Projects />
      </Container>
    </Box>
  );
};

export default ProjectsPage;

import { Container, Box } from "@mui/material";
import Experience from "../components/sections/Experience";

const ExperiencePage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Experience />
      </Container>
    </Box>
  );
};

export default ExperiencePage;

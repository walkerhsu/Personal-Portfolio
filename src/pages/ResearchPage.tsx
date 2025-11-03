import { Container, Box } from "@mui/material";
import Research from "../components/sections/Research";

const ResearchPage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Research />
      </Container>
    </Box>
  );
};

export default ResearchPage;

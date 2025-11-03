import { Container, Box } from "@mui/material";
import Header from "../components/sections/Header";

const HomePage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Header />
      </Container>
    </Box>
  );
};

export default HomePage;

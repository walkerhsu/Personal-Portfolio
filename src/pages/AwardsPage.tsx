import { Container, Box } from "@mui/material";
import Awards from "../components/sections/Awards";

const AwardsPage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Awards />
      </Container>
    </Box>
  );
};

export default AwardsPage;

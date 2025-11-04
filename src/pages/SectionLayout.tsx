import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const SectionLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 64px)", py: 6 }}>
      <Outlet />
    </Container>
  );
};

export default SectionLayout;

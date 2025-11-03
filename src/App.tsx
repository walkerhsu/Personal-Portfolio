import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import ExperienceDetail from "./components/details/ExperienceDetail";
import ProjectDetail from "./components/details/ProjectDetail";
import ResearchDetail from "./components/details/ResearchDetail";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";
import ExperiencePage from "./pages/ExperiencePage";
import AwardsPage from "./pages/AwardsPage";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#9333ea",
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

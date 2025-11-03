import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ExperienceDetail from "./components/details/ExperienceDetail";
import ProjectDetail from "./components/details/ProjectDetail";
import ResearchDetail from "./components/details/ResearchDetail";
import HomePage from "./pages/HomePage";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Experience from "./components/sections/Experience";
import Awards from "./components/sections/Awards";
import Layout from "./pages/Layout";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="research" element={<Research />} />
          <Route path="experience" element={<Experience />} />
          <Route path="awards" element={<Awards />} />
          <Route path="experience/:id" element={<ExperienceDetail />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="research/:id" element={<ResearchDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

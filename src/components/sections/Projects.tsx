import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { renderTimeAndAward } from "../utils/projectsUtils";

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ mb: 8, scrollMarginTop: "100px" }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WorkIcon /> Projects
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Research and development work
        </Typography>
      </Box>

      <Stack spacing={3}>
        {projects.map((project, index) => (
          <Link to={`/project/${index}`} key={index} style={{ textDecoration: 'none' }}>
            <Card variant="outlined">
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {renderTimeAndAward(project.period, project.award)}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} size="small" />
                  ))}
                </Stack>

                {project.links && project.links.length > 0 && (
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outlined"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<link.icon size={16} />}
                        sx={{ textTransform: "none" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

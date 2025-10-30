import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

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
                    {project.link ? (
                      <Button
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: "none", padding: 0, minWidth: 0 }}
                      >
                        <Typography variant="h6" component="h3">
                          {project.title}
                        </Typography>
                      </Button>
                    ) : (
                      <Typography variant="h6" component="h3">
                        {project.title}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      {project.period} {project.award && `• ${project.award}`}
                    </Typography>
                  </Box>
                  {project.link && (
                    <IconButton
                      size="small"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} size="small" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

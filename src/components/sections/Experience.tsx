import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <Box
      id="experience"
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
          <WorkHistoryIcon /> Work Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Professional experience and employment history
        </Typography>
      </Box>

      <Stack spacing={3}>
        {experiences.map((exp, index) => (
          <Link to={`/experience/${index}`} key={index} style={{ textDecoration: 'none' }}>
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
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.period}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {exp.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {exp.tags.map((tag, tagIndex) => (
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

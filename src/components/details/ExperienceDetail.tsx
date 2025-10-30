import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "../../data/experiences";

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences[Number(id)];

  if (!experience) {
    return <Typography>Experience not found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
        Go Back
      </Button>
      <Typography variant="h4" component="h1" gutterBottom>
        {experience.title}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {experience.company}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {experience.period}
      </Typography>
      <Typography variant="body1" paragraph>
        {experience.description}
      </Typography>
      <Stack direction="row" spacing={1}>
        {experience.tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </Stack>
    </Box>
  );
}

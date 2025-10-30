import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { publications } from "../../data/publications";
import LaunchIcon from "@mui/icons-material/Launch";

export default function PublicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const publication = publications[Number(id)];

  if (!publication) {
    return <Typography>Publication not found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 4 }}>
        Go Back
      </Button>
      <Typography variant="h4" component="h1" gutterBottom>
        {publication.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontStyle: "italic", mb: 2 }}
        color="text.secondary"
      >
        {publication.authors}
      </Typography>
      <Typography variant="body1" paragraph>
        {publication.description}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={publication.venue} />
      </Stack>
      {publication.link && (
        <Button
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LaunchIcon />}
        >
          View Publication
        </Button>
      )}
    </Box>
  );
}

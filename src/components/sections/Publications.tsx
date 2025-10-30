import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { publications } from "../../data/publications";

export default function Publications() {
  return (
    <Box
      id="publications"
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
          <ArticleIcon /> Publications
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Selected research papers and articles
        </Typography>
      </Box>

      <Stack spacing={3}>
        {publications.map((pub, index) => (
          <Link to={`/publication/${index}`} key={index} style={{ textDecoration: 'none' }}>
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
                    {pub.link ? (
                      <Button
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: "none", padding: 0, minWidth: 0 }}
                      >
                        <Typography variant="h6" component="h3">
                          {pub.title}
                        </Typography>
                      </Button>
                    ) : (
                      <Typography variant="h6" component="h3">
                        {pub.title}
                      </Typography>
                    )}
                  </Box>
                  {pub.link && (
                    <IconButton
                      size="small"
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", mb: 2 }}
                  color="text.secondary"
                >
                  {pub.authors}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {pub.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip key={"venue"} label={pub.venue} size="small" />
                </Stack>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

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
import ScienceIcon from "@mui/icons-material/Science";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { research } from "../../data/research";

export default function Research() {
  return (
    <Box
      id="research"
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
          <ScienceIcon /> Research
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publications and research work
        </Typography>
      </Box>

      <Stack spacing={3}>
        {research.map((item, index) => (
          <Link to={`/research/${index}`} key={index} style={{ textDecoration: 'none' }}>
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
                    {item.link ? (
                      <Button
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: "none", padding: 0, minWidth: 0 }}
                      >
                        <Typography variant="h6" component="h3">
                          {item.title}
                        </Typography>
                      </Button>
                    ) : (
                      <Typography variant="h6" component="h3">
                        {item.title}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      {item.period}{item.venue && `• ${item.venue}`} {item.award && `• ${item.award}`}
                    </Typography>
                  </Box>
                  {item.link && (
                    <IconButton
                      size="small"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {item.tags.map((tag, tagIndex) => (
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
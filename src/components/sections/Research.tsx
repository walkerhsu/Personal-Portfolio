import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import { Link } from "react-router-dom";
import { research } from "../../data/research";
import { renderTimeAndVenue } from "../utils/researchUtils";

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
          <Link
            to={`/research/${index}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
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
                      {item.title}
                    </Typography>
                    {renderTimeAndVenue(item.period, item.venue)}
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {item.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} size="small" />
                  ))}
                </Stack>

                {item.links && item.links.length > 0 && (
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    {item.links.map((link, linkIndex) => (
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

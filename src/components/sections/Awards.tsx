import { Box, Typography, Card, CardContent, Avatar, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const awards = [
  {
    title: "Outstanding Research Award",
    organization: "National Science Foundation • 2024",
    description:
      "Recognized for groundbreaking contributions to neural architecture search and automated machine learning. Award includes $500,000 research grant.",
    color: "#FFC107",
  },
  {
    title: "Best Paper Award",
    organization: "NeurIPS Conference • 2024",
    description:
      'Awarded for the paper "Efficient Neural Architecture Search via Parameter Sharing" selected from over 3,000 submissions as one of the top contributions to the field.',
    color: "#2196F3",
  },
  {
    title: "Excellence in Teaching Award",
    organization: "University Department • 2023",
    description:
      "Honored for exceptional teaching quality and student mentorship. Student evaluations consistently rated above 4.5/5.0 across all courses.",
    color: "#9C27B0",
  },
  {
    title: "Rising Star in AI",
    organization: "AI Research Society • 2022",
    description:
      "Recognized as one of 10 early-career researchers making significant impact in artificial intelligence and machine learning research worldwide.",
    color: "#4CAF50",
  },
  {
    title: "Doctoral Dissertation Award",
    organization: "ACM • 2019",
    description:
      'Distinguished dissertation award for thesis on "Interpretable Machine Learning Methods for Complex Neural Networks" at Stanford University.',
    color: "#F44336",
  },
];

export default function Awards() {
  return (
    <Box
      id="awards"
      component="section"
      sx={{ mb: 8, scrollMarginTop: "100px" }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmojiEventsIcon /> Awards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Recognition and honors
        </Typography>
      </Box>

      <Stack spacing={3}>
        {awards.map((award, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Avatar sx={{ bgcolor: award.color, mt: 0.5 }}>
                  <EmojiEventsIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {award.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {award.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {award.description}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

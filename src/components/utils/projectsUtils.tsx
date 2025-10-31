import { Box, Typography } from "@mui/material";
import { Calendar } from "lucide-react";

export function renderTimeAndAward(period: string, award?: string) {
  return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      mt: 1,
    }}
  >
    <Calendar size={16} />
    <Typography variant="body2">{period}</Typography>
    {award && (
      <Typography variant="body2" sx={{ color: "warning.main" }}>
        {" "}
        &#x2022; {award}
      </Typography>
    )}
  </Box>;
}
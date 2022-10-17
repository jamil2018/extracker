import { styled, Typography } from "@mui/material";

export const Subtitle = styled(Typography)(({ theme }) => ({
  letterSpacing: theme.spacing(0.5),
  color: theme.palette.primary.main,
}));

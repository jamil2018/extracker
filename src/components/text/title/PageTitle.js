import { styled, Typography } from "@mui/material";

export const PageTitle = styled(Typography)(({ theme }) => ({
  letterSpacing: theme.spacing(1),
  color: theme.palette.primary.main,
}));

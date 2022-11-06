import { Button, Card, CardContent, Typography, useTheme } from "@mui/material";

const WeekdayTaskContainer = ({ title, createHandler, children }) => {
  const theme = useTheme();
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ marginBottom: theme.spacing(1) }}
          textAlign="center"
        >
          Monday
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ marginBottom: theme.spacing(2) }}
        >
          Add new task
        </Button>
        {children}
      </CardContent>
    </Card>
  );
};

export default WeekdayTaskContainer;

import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

const WeeklyTimesheetHeader = ({ date, taskCreationHandler }) => {
  const theme = useTheme();
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h6"
            sx={{ marginBottom: theme.spacing(1) }}
            textAlign="center"
          >
            {date.day}
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            sx={{ marginBottom: theme.spacing(2) }}
            onClick={() => taskCreationHandler(date.value)}
          >
            Add new task
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default WeeklyTimesheetHeader;

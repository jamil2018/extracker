import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";

const WeeklyTimesheetEntryCard = ({
  fromTime,
  toTime,
  editHandler,
  deleteHandler,
  description,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
      }}
    >
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box>
            <ScheduleIcon sx={{ marginRight: theme.spacing(1) }} />
            <Typography variant="subtitle2">
              {fromTime} - {toTime}
            </Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeeklyTimesheetEntryCard;

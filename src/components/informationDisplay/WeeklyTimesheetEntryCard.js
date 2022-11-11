import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ScheduleIcon from "@mui/icons-material/Schedule";
import {
  calcTimeDiffInHrs,
  convertTimeToLocaleString,
} from "../../utils/dateTimeUtils";
import { memo } from "react";

const WeeklyTimesheetEntryCard = ({
  id,
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
        marginY: theme.spacing(2),
      }}
    >
      <CardContent sx={{ paddingX: theme.spacing(1) }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid xs={8} item container alignItems="center">
            <ScheduleIcon
              sx={{
                marginRight: theme.spacing(0.5),
                width: theme.spacing(1.9),
                height: theme.spacing(1.9),
              }}
            />
            <Typography variant="caption">
              {convertTimeToLocaleString(fromTime)} -{" "}
              {convertTimeToLocaleString(toTime)}
            </Typography>
          </Grid>
          <Grid
            xs={4}
            item
            container
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <IconButton onClick={() => editHandler(id)}>
              <EditIcon
                sx={{
                  color: theme.palette.getContrastText(
                    theme.palette.primary.main
                  ),
                  width: theme.spacing(1.9),
                  height: theme.spacing(1.9),
                }}
              />
            </IconButton>
            <IconButton onClick={() => deleteHandler(id)}>
              <DeleteIcon
                sx={{
                  color: theme.palette.getContrastText(
                    theme.palette.primary.main
                  ),
                  width: theme.spacing(1.9),
                  height: theme.spacing(1.9),
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Typography sx={{ marginTop: theme.spacing(2) }}>
          {description}
        </Typography>
        <Typography
          variant="caption"
          sx={{ marginTop: theme.spacing(3), display: "inline-block" }}
        >
          {calcTimeDiffInHrs(fromTime, toTime)}h
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(WeeklyTimesheetEntryCard);

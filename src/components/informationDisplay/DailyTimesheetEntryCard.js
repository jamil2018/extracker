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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  calcTimeDiffInHrs,
  convertTimeToLocaleString,
} from "../../utils/dateTimeUtils";
import { memo } from "react";

const DailyTimesheetEntryCard = ({
  id,
  fromTime,
  toTime,
  description,
  editActionHandler,
  deleteActionHandler,
}) => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{ marginY: theme.spacing(3) }}
    >
      <Grid container xs={2}>
        <AccessTimeIcon sx={{ marginRight: theme.spacing(0.5) }} />
        <Typography>
          {convertTimeToLocaleString(fromTime)} -{" "}
          {convertTimeToLocaleString(toTime)}
        </Typography>
      </Grid>
      <Grid container xs={10}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
          }}
        >
          <CardContent>
            <Grid container justifyContent="space-around" alignItems="center">
              <Grid container direction="column" item xs={9}>
                <Typography variant="body1"> {description}</Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ marginTop: theme.spacing(4) }}
                >
                  {calcTimeDiffInHrs(fromTime, toTime)}h
                </Typography>
              </Grid>
              <Grid container xs={3} justifyContent="flex-end">
                <IconButton
                  sx={{ marginRight: theme.spacing(2) }}
                  onClick={() => editActionHandler(id)}
                >
                  <EditIcon
                    sx={{
                      color: theme.palette.getContrastText(
                        theme.palette.primary.main
                      ),
                    }}
                  />
                </IconButton>
                <IconButton onClick={() => deleteActionHandler(id)}>
                  <DeleteIcon
                    sx={{
                      color: theme.palette.getContrastText(
                        theme.palette.primary.main
                      ),
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default memo(DailyTimesheetEntryCard);

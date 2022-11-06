import { Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { Subtitle, WeeklyTaskContainer } from "../../../components";

const UserWeeklyTimesheetView = () => {
  const theme = useTheme();
  return (
    <>
      <Subtitle variant="subtitle1" sx={{ marginBottom: theme.spacing(3) }}>
        Timesheet Entries For The Week
      </Subtitle>
      <Card variant="outlined" sx={{ height: "60vh" }}>
        <CardContent sx={{ height: "inherit" }}>
          <Grid
            container
            sx={{ height: "inherit", marginBottom: theme.spacing(4) }}
          >
            <Grid
              container
              item
              sx={{ height: "inherit" }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
                title="Monday"
                createHandler={(day) => console.log(`creating task for ${day}`)}
              >
                hello world
              </WeeklyTaskContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserWeeklyTimesheetView;

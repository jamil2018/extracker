import { Grid, useTheme } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import {
  DataList,
  Subtitle,
  WeeklyTaskContainer,
  WeeklyTimesheetEntryCard,
} from "../../../components";

const UserWeeklyTimesheetView = () => {
  const theme = useTheme();
  return (
    <>
      <Subtitle variant="subtitle1" sx={{ marginBottom: theme.spacing(3) }}>
        Timesheet Entries For The Week
      </Subtitle>
      <Card
        variant="outlined"
        sx={{
          height: "60vh",
          paddingBottom: theme.spacing(2),
          overflowY: "scroll",
        }}
      >
        <CardContent sx={{ height: "inherit" }}>
          <Grid
            container
            sx={{ height: "inherit", marginBottom: theme.spacing(4) }}
          >
            <Grid
              container
              item
              sx={{ height: "inherit", marginBottom: theme.spacing(2) }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
                title="Monday"
                createHandler={(day) => console.log(`creating task for ${day}`)}
              >
                <DataList
                  orientation="column"
                  emptyMessage="No entries"
                  listItems={[
                    <WeeklyTimesheetEntryCard
                      deleteHandler={(id) => {
                        console.log("deleting id:", id);
                      }}
                      editHandler={(id) => console.log("editing id:", id)}
                      description="Meeting with product"
                      fromTime={new Date(2022, 11, 3, 14, 30)}
                      toTime={new Date(2022, 11, 3, 16, 0)}
                    />,
                    <WeeklyTimesheetEntryCard
                      deleteHandler={(id) => {
                        console.log("deleting id:", id);
                      }}
                      editHandler={(id) => console.log("editing id:", id)}
                      description="Meeting with product"
                      fromTime={new Date(2022, 11, 3, 14, 30)}
                      toTime={new Date(2022, 11, 3, 16, 0)}
                    />,
                    <WeeklyTimesheetEntryCard
                      deleteHandler={(id) => {
                        console.log("deleting id:", id);
                      }}
                      editHandler={(id) => console.log("editing id:", id)}
                      description="Meeting with product"
                      fromTime={new Date(2022, 11, 3, 14, 30)}
                      toTime={new Date(2022, 11, 3, 16, 0)}
                    />,
                    <WeeklyTimesheetEntryCard
                      deleteHandler={(id) => {
                        console.log("deleting id:", id);
                      }}
                      editHandler={(id) => console.log("editing id:", id)}
                      description="Meeting with product"
                      fromTime={new Date(2022, 11, 3, 14, 30)}
                      toTime={new Date(2022, 11, 3, 16, 0)}
                    />,
                  ]}
                />
              </WeeklyTaskContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserWeeklyTimesheetView;

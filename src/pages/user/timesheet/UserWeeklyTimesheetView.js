import { Grid, useTheme } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import {
  DataList,
  Subtitle,
  WeeklyTaskContainer,
  WeeklyTimesheetEntryCard,
  WeeklyTimesheetHeader,
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
          paddingBottom: theme.spacing(2),
          height: "71vh",
        }}
      >
        <CardContent sx={{ height: "inherit" }}>
          <Grid
            container
            justifyContent="space-between"
            sx={{
              marginBottom: theme.spacing(6),
              paddingRight: theme.spacing(1.2),
            }}
            spacing={2}
          >
            <Grid item xs={2.4}>
              <WeeklyTimesheetHeader
                date={{ day: "Monday", value: new Date(2022, 11, 7) }}
                taskCreationHandler={(date) =>
                  console.log(`creating entry for date: ${date}`)
                }
              />
            </Grid>
            <Grid item xs={2.4}>
              <WeeklyTimesheetHeader
                date={{ day: "Tuesday", value: new Date(2022, 11, 7) }}
                taskCreationHandler={(date) =>
                  console.log(`creating entry for date: ${date}`)
                }
              />
            </Grid>
            <Grid item xs={2.4}>
              <WeeklyTimesheetHeader
                date={{ day: "Wednesday", value: new Date(2022, 11, 7) }}
                taskCreationHandler={(date) =>
                  console.log(`creating entry for date: ${date}`)
                }
              />
            </Grid>
            <Grid item xs={2.4}>
              <WeeklyTimesheetHeader
                date={{ day: "Thursday", value: new Date(2022, 11, 7) }}
                taskCreationHandler={(date) =>
                  console.log(`creating entry for date: ${date}`)
                }
              />
            </Grid>
            <Grid item xs={2.4}>
              <WeeklyTimesheetHeader
                date={{ day: "Friday", value: new Date(2022, 11, 7) }}
                taskCreationHandler={(date) =>
                  console.log(`creating entry for date: ${date}`)
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              maxHeight: "50vh",
              marginBottom: theme.spacing(4),
              overflowY: "auto",
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-track": {
                background: "#f2f2f2",
              },
              "::-webkit-scrollbar-thumb": {
                background: theme.palette.primary.main,
              },
              paddingRight: theme.spacing(1),
            }}
            spacing={2}
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
            <Grid
              container
              item
              sx={{ height: "inherit", marginBottom: theme.spacing(2) }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
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
            <Grid
              container
              item
              sx={{ height: "inherit", marginBottom: theme.spacing(2) }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
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
            <Grid
              container
              item
              sx={{ height: "inherit", marginBottom: theme.spacing(2) }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
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
            <Grid
              container
              item
              sx={{ height: "inherit", marginBottom: theme.spacing(2) }}
              xs={2.4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <WeeklyTaskContainer
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

import { Button, Card, CardContent, Grid, useTheme } from "@mui/material";
import { Subtitle } from "../../../components";
import DailyTimesheetEntryCard from "../../../components/informationDisplay/DailyTimesheetEntryCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DataList from "../../../components/lists/DataList";

const UserDailyTimesheetView = () => {
  const theme = useTheme();

  // action handlers
  const editHandler = (id) => {
    console.log("edit button clicked from id: ", id);
  };

  const deleteHandler = (id) => {
    console.log("delete button clicked from id: ", id);
  };
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: theme.spacing(3) }}
      >
        <Subtitle variant="subtitle1">Timesheet Entry For Today</Subtitle>
        <Button startIcon={<AddCircleOutlineIcon />} variant="outlined">
          Add New Entry
        </Button>
      </Grid>
      <Card variant="outlined">
        <CardContent sx={{ paddingX: theme.spacing(6) }}>
          <DataList
            emptyMessage="No tasks have been added for today yet"
            listItems={
              [
                // <DailyTimesheetEntryCard
                //   fromTime="10:00 AM"
                //   toTime="11:00PM"
                //   description="Morning scrum"
                //   editActionHandler={(id) => {
                //     editHandler(id);
                //   }}
                //   deleteActionHandler={(id) => deleteHandler(id)}
                // />,
                // <DailyTimesheetEntryCard
                //   fromTime="11:00 AM"
                //   toTime="12:00PM"
                //   description="Meeting with product"
                //   editActionHandler={(id) => {
                //     editHandler(id);
                //   }}
                //   deleteActionHandler={(id) => deleteHandler(id)}
                // />,
                // <DailyTimesheetEntryCard
                //   fromTime="12:00 PM"
                //   toTime="03:00PM"
                //   description="Develop feature X"
                //   editActionHandler={(id) => {
                //     editHandler(id);
                //   }}
                //   deleteActionHandler={(id) => deleteHandler(id)}
                // />,
              ]
            }
          />
        </CardContent>
      </Card>
    </>
  );
};

export default UserDailyTimesheetView;

import { Button, Card, CardContent, Grid, useTheme } from "@mui/material";
import { Subtitle, DataList } from "../../../components";
import DailyTimesheetEntryCard from "../../../components/informationDisplay/DailyTimesheetEntryCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
            listItems={[
              <DailyTimesheetEntryCard
                fromTime={new Date(2022, 11, 3, 10, 30)}
                toTime={new Date(2022, 11, 3, 11, 30)}
                description="Morning scrum"
                editActionHandler={(id) => {
                  editHandler(id);
                }}
                deleteActionHandler={(id) => deleteHandler(id)}
              />,
              <DailyTimesheetEntryCard
                fromTime={new Date(2022, 11, 3, 12, 30)}
                toTime={new Date(2022, 11, 3, 13, 0)}
                description="Meeting with product"
                editActionHandler={(id) => {
                  editHandler(id);
                }}
                deleteActionHandler={(id) => deleteHandler(id)}
              />,
              <DailyTimesheetEntryCard
                fromTime={new Date(2022, 11, 3, 14, 30)}
                toTime={new Date(2022, 11, 3, 16, 0)}
                description="Develop feature X"
                editActionHandler={(id) => {
                  editHandler(id);
                }}
                deleteActionHandler={(id) => deleteHandler(id)}
              />,
            ]}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default UserDailyTimesheetView;

import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import { Subtitle, DataList } from "../../../components";
import DailyTimesheetEntryCard from "../../../components/informationDisplay/DailyTimesheetEntryCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/system";

const dayChangeTypes = {
  prev: "prev",
  next: "next",
};

const UserDailyTimesheetView = () => {
  const theme = useTheme();

  // states
  const [date, setDate] = useState(dayjs());

  // action handlers
  const editHandler = (id) => {
    console.log("edit button clicked from id: ", id);
  };

  const deleteHandler = (id) => {
    console.log("delete button clicked from id: ", id);
  };

  const dayHandler = (type) => {
    if (type === dayChangeTypes.next) {
      setDate(dayjs(date).add(1, "day"));
    }
    if (type === dayChangeTypes.prev) {
      setDate(dayjs(date).subtract(1, "day"));
    }
  };

  const dateHandler = (newVal) => setDate(newVal);

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: theme.spacing(6) }}
      >
        <Subtitle variant="subtitle1">Timesheet Entry For Today</Subtitle>
        <Button startIcon={<AddCircleOutlineIcon />} variant="outlined">
          Add New Entry
        </Button>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: theme.spacing(2) }}
      >
        <Grid item>
          <ButtonGroup variant="outlined">
            <Button onClick={() => dayHandler(dayChangeTypes.prev)}>
              <ArrowBackIosIcon fontSize="small" />
            </Button>
            <Button onClick={() => dayHandler(dayChangeTypes.next)}>
              <ArrowForwardIosIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Select date"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={dateHandler}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  sx={{
                    svg: { color: theme.palette.primary.main },
                    input: { color: theme.palette.primary.main },
                    label: { color: theme.palette.primary.main },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              paddingX: theme.spacing(6),
              maxHeight: "57.63vh",
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
            }}
          >
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
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDailyTimesheetView;

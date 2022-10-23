import { ButtonGroup, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PageHeader } from "../../../components";
import LinkButton from "../../../components/button/LinkButton";

const UserTimeSheet = () => {
  const theme = useTheme();
  return (
    <>
      <PageHeader title="Timesheet" />
      <ButtonGroup
        variant="outlined"
        sx={{
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(5),
          display: "block",
        }}
      >
        <LinkButton to="/user/timesheet">Daily</LinkButton>
        <LinkButton to="/user/timesheet/weekly">Weekly</LinkButton>
      </ButtonGroup>
      <Outlet />
    </>
  );
};

export default UserTimeSheet;

import { ButtonGroup, useTheme } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { PageHeader } from "../../../components";
import LinkButton from "../../../components/button/LinkButton";

const checkLinkToDisable = (path) => {
  const disabledLinks = {
    daily: false,
    weekly: false,
  };
  if (path === "/user/timesheet") disabledLinks.daily = true;
  if (path === "/user/timesheet/weekly") disabledLinks.weekly = true;
  return disabledLinks;
};

const UserTimeSheet = () => {
  const theme = useTheme();
  const location = useLocation();
  const disabledLinks = checkLinkToDisable(location.pathname);
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
        <LinkButton to="/user/timesheet" disabled={disabledLinks.daily}>
          Daily
        </LinkButton>
        <LinkButton to="/user/timesheet/weekly" disabled={disabledLinks.weekly}>
          Weekly
        </LinkButton>
      </ButtonGroup>
      <Outlet />
    </>
  );
};

export default UserTimeSheet;

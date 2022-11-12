import {
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box } from "@mui/system";
import SidebarLink from "./SidebarLink";
import { Link } from "react-router-dom";
import SidebarAction from "./SidebarAction";

const drawerWidth = 240;

const drawerLinks = [
  {
    text: "Timesheet",
    icon: <EventAvailableIcon />,
    url: "/user/timesheet",
  },
  {
    text: "Team",
    icon: <GroupsIcon />,
    url: "/user/team",
  },
];
const drawerActions = [
  {
    text: "Logout",
    icon: <ExitToAppIcon />,
    action: () => console.log("logout"),
  },
];

const Sidebar = () => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: theme.spacing(1),
              textDecoration: "none",
            }}
            color={theme.palette.primary.main}
            component={Link}
            to="/user"
          >
            Extracker
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <SidebarLink linkProps={drawerLinks} />
        </List>
        <Box sx={{ marginTop: "auto" }}>
          <Divider />
          <SidebarAction actionProps={drawerActions} />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;

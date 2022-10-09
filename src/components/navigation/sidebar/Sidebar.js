import { Divider, Drawer, List, Toolbar } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box } from "@mui/system";
import SidebarLink from "./SidebarLink";

const drawerLinks = [
  {
    text: "Timesheet",
    icon: <EventAvailableIcon />,
    url: "/user/timesheet",
  },
  {
    text: "Teams",
    icon: <GroupsIcon />,
    url: "/user/teams",
  },
];
const drawerActions = [
  {
    text: "Logout",
    icon: <ExitToAppIcon />,
    action: () => console.log("logout"),
  },
];
const drawerWidth = 240;

const Sidebar = () => {
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
        <Toolbar />
        <Divider />
        <List>
          <SidebarLink linkProps={drawerLinks} />
        </List>
        <Box sx={{ marginTop: "auto" }}>
          <Divider />
          <SidebarLink linkProps={drawerActions} />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;

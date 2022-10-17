import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const SidebarAction = ({ actionProps }) => {
  return (
    <>
      {actionProps.map((item) => {
        return (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={item.action}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default SidebarAction;

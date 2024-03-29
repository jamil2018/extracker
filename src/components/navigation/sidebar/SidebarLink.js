import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const SidebarLink = ({ linkProps }) => {
  return (
    <>
      {linkProps.map((item) => {
        return (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.url}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default SidebarLink;

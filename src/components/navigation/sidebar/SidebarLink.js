import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const SidebarLink = ({ linkProps }) => {
  const getButtonProperties = (item) => {
    const buttonProperties = item.url
      ? { component: Link, to: item.url }
      : { onClick: item.action };
    return buttonProperties;
  };
  return (
    <>
      {linkProps.map((item) => {
        return (
          <ListItem key={item.text} disablePadding>
            <ListItemButton {...getButtonProperties(item)}>
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

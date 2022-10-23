import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = ({ to, props, children }) => {
  return (
    <Button component={Link} to={to} {...props}>
      {children}
    </Button>
  );
};

export default LinkButton;

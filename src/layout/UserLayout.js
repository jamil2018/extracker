import { Box, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/sidebar/Sidebar";

const UserLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Container maxWidth="xl">
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
};

export default UserLayout;

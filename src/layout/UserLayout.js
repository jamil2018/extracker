import { Box } from "@mui/material";
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
        <Outlet />
      </Container>
    </Box>
  );
};

export default UserLayout;

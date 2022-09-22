import { createBrowserRouter } from "react-router-dom";
import {
  Login,
  UserTeams,
  UserProfile,
  UserTimeSheet,
  AdminProfile,
  AdminDashboard,
  TeamsDashboard,
  UsersDashboard,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/timeSheet",
    element: <UserTimeSheet />,
  },
  {
    path: "/teams",
    element: <UserTeams />,
  },
  {
    path: "/admin/profile",
    element: <AdminProfile />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/teams",
    element: <TeamsDashboard />,
  },
  {
    path: "/admin/users",
    element: <UsersDashboard />,
  },
]);

export default router;

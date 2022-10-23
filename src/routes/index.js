import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import {
  Login,
  UserTeams,
  UserTimeSheet,
  AdminProfile,
  AdminDashboard,
  UserDashboard,
  AdminTeamsDashboard,
  AdminUsersDashboard,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "timeSheet",
        element: <UserTimeSheet />,
      },
      {
        path: "teams",
        element: <UserTeams />,
      },
    ],
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
    element: <AdminTeamsDashboard />,
  },
  {
    path: "/admin/users",
    element: <AdminUsersDashboard />,
  },
]);

export default router;

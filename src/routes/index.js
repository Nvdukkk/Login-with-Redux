import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useRoutes } from "react-router-dom";

const privateRoutes = [{ path: "/Dashboard", element: <Dashboard /> }];

const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "/Login", element: <Login /> },
  { path: "/", children: privateRoutes },
];
const AppRoutes = () => useRoutes(publicRoutes);

export { privateRoutes, AppRoutes };

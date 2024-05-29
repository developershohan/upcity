import { children } from "react";
import Layout from "../components/Layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DonorRegister from "../pages/auth/DonorRegister";
import PublicGard from "./PublicGard";

// create public route
export const publicRoute = [
  {
    element: <PublicGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/donor-register",
            element: <DonorRegister />,
          },
        ],
      },
    ],
  },
];

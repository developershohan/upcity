import { children } from "react";
import Layout from "../components/Layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateGard from "./PrivateGard";

// create public route
export const privateRoute = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];

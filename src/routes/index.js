import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../view/Dashboard/Dashboard";

const Router = () => {
  return useRoutes([
    {
      path: "display",
      children: [
        {
          path: "data",
          element: <Dashboard />,
        },
      ],
    },
  ]);
};

export default Router;

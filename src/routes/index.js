import React from "react";
import Dashboard from "../view/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default Router;

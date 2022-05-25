import React from "react";

import { Routes, Route } from "react-router-dom";

import { HomePage } from "../../Presentation/Components/Pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;

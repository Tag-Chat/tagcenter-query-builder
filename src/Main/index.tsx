import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";

const Main = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default Main;

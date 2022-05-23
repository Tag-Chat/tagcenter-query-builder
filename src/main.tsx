import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./presentation/Styles/global";

import Main from "./Main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>
);

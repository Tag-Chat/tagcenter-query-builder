import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Presentation/Styles/global";
import { CoreProvider } from "./Presentation/Hooks/Context";

import Main from "./Main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CoreProvider>
      <GlobalStyles />
      <Main />
    </CoreProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/index";
import { inject } from "@vercel/analytics";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

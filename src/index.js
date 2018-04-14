import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./containers/app-router";
import store from "./store";

import "./index.css";
ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  document.getElementById("root")
);

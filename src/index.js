import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import AppRouter from "./approuter";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./client/assets/css/bootstrap.min.css";
// boostrap
import "bootstrap/dist/css/bootstrap.min.css";
//fontawesome
import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

if (!window.location.pathname.includes("admin")) {
  require("./client/assets/css/all.css");
  require("./client/assets/css/all.min.css");
  require("./client/assets/css/fontawesome.min.css");
  require("./client/assets/css/style.css");
  require("./client/assets/js/popper.min.js");
}
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}

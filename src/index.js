import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
// import bootstrap sass file after Customize

import "bootstrap/dist/css/bootstrap.min.css";

// import global after bootstrap.min.css file to lsat styling on the page
import "./sass/global-import.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/animeforall">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

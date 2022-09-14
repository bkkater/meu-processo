import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Styles
import "~/resources/scss/index.scss"; // Bootstrap e etc...

// Scripts
import "~/resources/js"; // Bootstrap, Jquery e etc...

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

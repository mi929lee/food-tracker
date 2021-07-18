import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

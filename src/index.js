import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import MapComponent from "./mapBox";
// import * as serviceWorker from "./service-worker"; // Import the service worker script

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MapComponent />
  </React.StrictMode>
);
// serviceWorker.register(); // Register the service worker
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

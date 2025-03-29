import React from "react";
import ReactDOM from "react-dom/client"; // Make sure this is the correct import
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is necessary for routing
import App from "./App";
import "./index.css"; // Ensure the CSS is linked properly

const root = ReactDOM.createRoot(document.getElementById("root")); // Correctly get the root div

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

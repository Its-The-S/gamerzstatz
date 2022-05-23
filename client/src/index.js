import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";

// top level react render to html body element
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

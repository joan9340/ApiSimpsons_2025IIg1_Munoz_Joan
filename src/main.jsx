import React from "react";
import ReactDOM from "react-dom/client";
//BrowserRouter para las rutas
import { HashRouter } from "react-router-dom"; 
import App from "./App.jsx";
import "./index.css";
import "animate.css";

// ReactDOM.createRoot() es el nuevo método para renderizar en React 18+
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
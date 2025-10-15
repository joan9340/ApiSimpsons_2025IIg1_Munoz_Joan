import React from "react";
import ReactDOM from "react-dom/client";
//BrowserRouter para las rutas
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "animate.css";

// ReactDOM.createRoot() es el nuevo método para renderizar en React 18+
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter maneja la navegación entre rutas */}
    <BrowserRouter basename="/ApiSimpsons_2025IIg1_Munoz_Joan">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MusicProvider } from "./components/MusicPlayer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <MusicProvider>
      <App />
    </MusicProvider>
    </BrowserRouter>
  </React.StrictMode>
);

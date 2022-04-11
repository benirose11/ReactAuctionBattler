import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { GameStateProvider } from "./context/context";

ReactDOM.render(
  <GameStateProvider>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </GameStateProvider>,
  document.getElementById("root")
);

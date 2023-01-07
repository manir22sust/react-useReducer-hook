import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";

// import { GlobalStateProvider } from "./store/globalStore";
import { GlobalStateProvider } from "./store/global/global.provider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </GlobalStateProvider>
  </React.StrictMode>
);

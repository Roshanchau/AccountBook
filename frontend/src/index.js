import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { CustomersContextProvider } from "./context/CustomerContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CustomersContextProvider>
          <App />
      </CustomersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

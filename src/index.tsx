import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BudgetContextProvider>
      <App />
    </BudgetContextProvider>
  </React.StrictMode>
);

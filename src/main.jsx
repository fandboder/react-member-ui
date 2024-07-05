import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from 'react'

import "./index.css";
import StoreContextProvider from "./components/context/StoreContext.jsx";
import Cursor from "./components/ui/cursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <Cursor />
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./components/context/StoreContext.jsx";
import Cursor from "./components/ui/cursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <Cursor />
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

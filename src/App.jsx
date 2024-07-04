import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Welcome from "./pages/Welcome/Welcome";
import BaseLayout from "./layout/BaseLayout";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;

import Preloader from "../src/components/ui/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "../src/layout/BaseLayout";
import Home from "../src/pages/Home/Home";
import Cart from "../src/pages/Cart/Cart";
import Checkout from "../src/pages/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Layout from "./layout/Layout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, [1100]);
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
          </Route>
          <Route path="/home" element={<BaseLayout />}>
              <Route index element={<Home />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

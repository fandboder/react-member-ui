import { Route, Routes } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Welcome from "./pages/Welcome/Welcome";
import BaseLayout from "./layout/BaseLayout";
//import Footer from "./components/Footer/Footer";

const App = () => {
  //const location = useLocation();  đưa import useLocation  vào chung với route và routes

  return (
    <>
      {/*location.pathname !== "/" && <NavBar />*/}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/*{location.pathname !== "/" && <Footer />}*/}
    </>
  );
};

export default App;

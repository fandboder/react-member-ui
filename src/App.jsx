import { Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Welcome from "./pages/Welcome/Welcome";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}{" "}
      {/* Hiển thị NavBar nếu không phải trang Welcome */}
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}{" "}
      {/* Hiển thị Footer nếu không phải trang Welcome */}
    </>
  );
};

export default App;

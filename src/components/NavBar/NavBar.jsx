import "./NavBar.css";
import { assets } from "./../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./../context/StoreContext";

const NavBar = () => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartQuantity } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <Link to="/home">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <ul className="navbar-menu" id="navbar-menu">
        <Link
          to="/home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Trang chủ
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Thực đơn
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Liên hệ
        </a>
      </ul>
      <div className="navbar-right">
        <Link to="/cart">
          <img src={assets.basket_icon} alt="" />
          {getTotalCartQuantity() > 0 && (
            <span className="cart-count">{getTotalCartQuantity()}</span>
          )}
        </Link>
        <div className={getTotalCartQuantity() === 0 ? "" : ""}></div>
      </div>
    </div>
  );
};

export default NavBar;

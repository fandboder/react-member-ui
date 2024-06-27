import "./NavBar.css";
import { assets } from "./../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./../context/StoreContext";

const NavBar = () => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <ul className="navbar-menu" id="navbar-menu">
        <Link
          to="/"
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
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot "}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

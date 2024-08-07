import "./FoodDisplay.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "./../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodDisplay = ({ category = "All" }) => {
  const { food_list } = useContext(StoreContext);
  const { getTotalCartQuantity, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="basket">
        <Link to="/cart">
          <img src={assets.basket_icon} alt="" />
          {getTotalCartQuantity() > 0 && (
            <span className="basket-count">{getTotalCartQuantity()}</span>
          )}
        </Link>
        <div className={getTotalCartQuantity() === 0 ? "" : ""}></div>
      </div>
      <div className="order-total">
        <p>Thành Tiền</p>
        <p>{getTotalCartAmount() + getTotalCartAmount() * 0.08} vnd</p>
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string,
};

export default FoodDisplay;

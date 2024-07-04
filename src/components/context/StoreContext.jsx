import { createContext, useState, useEffect } from "react";
import { food_list } from "../../assets/assets";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    const savedCart = localStorage.getItem("cartItems");
    const currentCart = savedCart ? JSON.parse(savedCart) : {};
    const updatedCart = {
      ...currentCart,
      [itemId]: (currentCart[itemId] || 0) + 1,
    };
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (itemId) => {
    const savedCart = localStorage.getItem("cartItems");
    const currentCart = savedCart ? JSON.parse(savedCart) : {};
    const newCart = { ...currentCart };
    if (newCart[itemId] > 0) {
      newCart[itemId] -= 1;
      if (newCart[itemId] === 0) {
        delete newCart[itemId];
      }
    }
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const getTotalCartQuantity = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const itemInfo = food_list.find((product) => product._id === itemId);
      return total + (itemInfo.price * cartItems[itemId] || 0);
    }, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartQuantity,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;

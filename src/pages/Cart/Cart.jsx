import "./Cart.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./../../components/context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const [confirmRemove, setConfirmRemove] = useState(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  const { updateCartQuantity, removeFromCart } = useContext(StoreContext);

  const handleIncreaseQuantity = (id) => {
    if (cartItems[id] >= 1) {
      updateCartQuantity(id, cartItems[id] + 1);
    }
  };

  const handleDecreaseQuantity = (id) => {
    if (cartItems[id] > 1) {
      updateCartQuantity(id, cartItems[id] - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleRemoveItem = (id) => {
    setConfirmRemove(id);
  };

  const confirmRemoveItem = (id, confirm) => {
    if (confirm) {
      removeFromCart(id);
    }
    setConfirmRemove(null);
  };

  const hasItemsInCart = Object.keys(cartItems).some((id) => cartItems[id] > 0);

  return (
    <div className="cart">
      <div className="cart-logo-container">
        <Link to="/home" onClick={handleLogoClick}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Món</p>
          <p>Tên món</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Số tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleDecreaseQuantity(item._id)}>
                      -
                    </button>
                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => handleIncreaseQuantity(item._id)}>
                      +
                    </button>
                  </div>
                  <p>{item.price * cartItems[item._id]} vnd</p>
                  <p
                    onClick={() => handleRemoveItem(item._id)}
                    className="cross"
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      {confirmRemove && (
        <div className="confirm-remove-popup">
          <p>Bạn muốn xóa món này khỏi giỏ hàng?</p>
          <button onClick={() => confirmRemoveItem(confirmRemove, true)}>
            Có
          </button>
          <button onClick={() => confirmRemoveItem(confirmRemove, false)}>
            Không
          </button>
        </div>
      )}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng giá đơn hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng Tiền Hàng</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Thuế (8%)</p>
              <p>${(getTotalCartAmount() * 0.08).toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng Thanh Toán</p>
              <p>${(getTotalCartAmount() * 1.08).toFixed(2)} vnd</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            disabled={!hasItemsInCart}
            className={!hasItemsInCart ? "disabled" : ""}
          >
            Tiến hành thanh toán
          </button>
        </div>
        <div className="cart-promocode">
          <p>Mã khuyến mãi</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
          </div>
          <button>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

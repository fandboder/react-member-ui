import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "./../../components/context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Món</p>
          <p>Tên món</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng giá</p>
          <p>Bỏ</p>
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
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng giá đơn hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng phụ</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Thuế (8%)</p>
              <p>${getTotalCartAmount() * 0.08}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tổng</p>
              <p>${getTotalCartAmount() + getTotalCartAmount() * 0.08}</p>
            </div>
          </div>
          <button>Tiến hành thanh toán</button>
        </div>
        <div className="cart-promocode">
          <p>Mã khuyến mãi</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

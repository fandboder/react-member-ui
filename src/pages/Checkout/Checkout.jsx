import "./Checkout.css";

const Checkout = () => {
  return (
    <from className="checkout">
      <div className="checkout-left">
        <p className="title">Thông tin đơn hàng</p>
        <div className="multi-fields">
          <input type="text" placeholder="Name" />
        </div>
        <input type="email" placeholder="Email" />
      </div>
      <div className="checkout-right"></div>
    </from>
  );
};

export default Checkout;

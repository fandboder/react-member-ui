import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <from className="place-order">
      <div className="place-order-left">
        <p className="title">Thông tin đơn hàng</p>
        <div className="multi-fields">
          <input type="text" placeholder="Name" />
        </div>
        <input type="email" placeholder="Email" />
      </div>
      <div className="place-order-right"></div>
    </from>
  );
};

export default PlaceOrder;

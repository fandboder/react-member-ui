import { Link } from "react-router-dom";
import { assets } from "./../../assets/assets";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="logo">
        <img src={assets.logo} alt="" className="logo" />
      </div>
      <div className="greeting">
        <h1>🍟 Chào mừng bạn đến với thế giới hương vị bùng nổ! 🍔</h1>
        <p>
          Tại SMURFF VILLAGE, từ những chiếc burger thơm lừng,
          <br />
          miếng gà giòn tan đến những phần khoai tây chiên vàng ruộm.
          <br /> Hãy sẵn sàng để khơi dậy niềm đam mê ẩm thực của bạn!
        </p>
      </div>
      <Link to="/home">
        <button className="order">Hãy đặt món ngay!</button>
      </Link>
    </div>
  );
};

export default Welcome;

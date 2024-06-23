import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Bùng nổ vị giác</h2>
        <p>
          Bạn đã dói bụng chưa ? Đừng để cơn đói làm phiền bạn!
          <br />
          Đắm chìm trong hương vị tuyệt hảo của những chiếc burger,
          <br />
          gà rán giòn tan, pizza nóng hổi và khoai tây chiên vàng ruộm.
          <br />
          Đặt món ngay và tận hưởng bữa tiệc fastfood đầy hứng khởi!
        </p>
        <button>👉Xem Thực đơn</button>
      </div>
    </div>
  );
};

export default Header;

import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>🍔 Nhanh chóng - Tiện lợi - Ngon miệng 🍟</p>
        </div>
        <div className="footer-content-center">
          <h2>Công ty</h2>
          <ul>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li></li>
            <li></li>
          </ul>
          <p>🍔 🍟 🍕 🌭 🥤 🍦 🍩</p>
        </div>
        <div className="footer-content-right">
          <h2>Liên lạc</h2>
          <ul>
            <li>📞 Hotline hỗ trợ: 1800 1234</li>
            <li>✉️ Email: support@orderfastfood.com</li>
            <li></li>
          </ul>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">Copyright 2024 © Smurfvillage.com</p>
    </div>
  );
};

export default Footer;

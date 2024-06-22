import PropTypes from "prop-types";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Khám phá thực đơn của chúng tôi</h1>
      <p className="explore-menu-text">
        Hãy cùng nhau bước vào thế giới ẩm thực phong phú và thưởng thức hương
        vị tuyệt vời mà nó mang đến!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // category nên là một chuỗi và là bắt buộc
  setCategory: PropTypes.func.isRequired, // setCategory nên là một hàm và là bắt buộc
};

export default ExploreMenu;

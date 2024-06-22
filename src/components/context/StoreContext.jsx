import { createContext } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {};
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
// Định nghĩa PropTypes để xác nhận props.children là bắt buộc
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StoreContextProvider;

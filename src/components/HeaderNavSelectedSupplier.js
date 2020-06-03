import React from "react";
import { useDispatch } from "react-redux";
import { backFromSelectedSupplier } from "../actions";

function HeaderNav(props) {
  const dispatch = useDispatch();

  return (
    <div className="header-nav-container">
      <div
        className="header-nav-menu"
        onClick={() => dispatch(backFromSelectedSupplier())}
      >
        <span className="fas fa-arrow-left"></span>
        <br />
      </div>
      <div className="header-nav-text">{props.title}</div>
    </div>
  );
}
export default HeaderNav;

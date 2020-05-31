import React from "react";
import { useDispatch } from "react-redux";
import { goBack } from "connected-react-router";

function HeaderNav(props) {
  const dispatch = useDispatch();

  return (
    <div className="header-nav-container">
      <div className="header-nav-menu" onClick={() => dispatch(goBack())}>
        <span className="fas fa-arrow-left"></span>
        <br />
      </div>
      <div className="header-nav-text">{props.title}</div>
    </div>
  );
}
export default HeaderNav;

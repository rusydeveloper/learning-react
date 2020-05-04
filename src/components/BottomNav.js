import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function BottomNav() {
  const dispatch = useDispatch();

  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav-menu" onClick={() => dispatch(push("/"))}>
        <span className="fa fa-home"></span>
        <br />
        Beranda
      </div>
      <div className="bottom-nav-menu" onClick={() => dispatch(push("/"))}>
        <span className="fa fa-shopping-cart"></span>
        <br />
        Belanja
      </div>
      <div
        className="bottom-nav-menu"
        onClick={() => dispatch(push("/invoice"))}
      >
        <span className="fa fa-archive"></span>
        <br />
        Pesanan
      </div>
      <div className="bottom-nav-menu" onClick={() => dispatch(push("/user"))}>
        <span className="fa fa-user"></span>
        <br />
        Saya
      </div>
    </div>
  );
}
export default BottomNav;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

function BottomNav() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  return (
    <div class="bottom-nav-container">
      <div class="bottom-nav-menu">
        <span class="fa fa-home" onClick={() => dispatch(push("/"))}></span>
        <br />
        Beranda
      </div>
      <div class="bottom-nav-menu">
        <span
          class="fa fa-shopping-cart"
          onClick={() => dispatch(push("/"))}
        ></span>
        <br />
        Belanja
      </div>
      <div class="bottom-nav-menu">
        <span
          class="fa fa-archive"
          onClick={() => dispatch(push("/invoice"))}
        ></span>
        <br />
        Pesanan
      </div>
      <div class="bottom-nav-menu" onClick={() => dispatch(push("/user"))}>
        <span class="fa fa-user"></span>
        <br />
        Saya
      </div>
    </div>
  );
}
export default BottomNav;

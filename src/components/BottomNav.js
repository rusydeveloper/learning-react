import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

function BottomNav() {
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router);

  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav-menu" onClick={() => dispatch(push("/"))}>
        <span
          className={
            router.location.pathname === "/" ? "bottom-nav-menu-active" : ""
          }
        >
          <span className="fa fa-shopping-cart"></span>
          <br />
          Belanja
        </span>
      </div>
      <div
        className="bottom-nav-menu"
        onClick={() => dispatch(push("/invoice"))}
      >
        <span
          className={
            router.location.pathname === "/invoice"
              ? "bottom-nav-menu-active"
              : ""
          }
        >
          <span className="fa fa-archive"></span>
          <br />
          Pesanan
        </span>
      </div>
      {/* <div
        className="bottom-nav-menu"
        onClick={() => dispatch(push("/feedback"))}
      >
        <span
          className={
            router.location.pathname === "/feedback"
              ? "bottom-nav-menu-active"
              : ""
          }
        >
          <span className="fa fa-paper-plane"></span>
          <br />
          Masukan
        </span>
      </div> */}
      <div
        className="bottom-nav-menu"
        onClick={() => dispatch(push("/inventory"))}
      >
        <span
          className={
            router.location.pathname === "/inventory" ||
            router.location.pathname === "/inventory/record" ||
            router.location.pathname === "/inventory/report"
              ? "bottom-nav-menu-active"
              : ""
          }
        >
          <span className="fa fa-sticky-note"></span>
          <br />
          Pencatatan
        </span>
      </div>
      <div className="bottom-nav-menu" onClick={() => dispatch(push("/user"))}>
        <span
          className={
            router.location.pathname === "/user" ? "bottom-nav-menu-active" : ""
          }
        >
          <span className="fa fa-user"></span>
          <br />
          Saya
        </span>
      </div>
    </div>
  );
}
export default BottomNav;

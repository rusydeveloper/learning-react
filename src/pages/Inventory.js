import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Mixpanel } from "../components/Mixpanel";
import { checkInventoryLogin, clearInventoryItem } from "../actions";
import HeaderNav from "../components/HeaderNav";
import { Button } from "react-bootstrap";
import { push } from "connected-react-router";

function Inventory() {
  Mixpanel.track("view inventory page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkInventoryLogin(user.id));
    dispatch(clearInventoryItem());
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <HeaderNav title="Pencatatan Toko"></HeaderNav>
      <div className="inventory-menu-container">
        <Button
          size="sm"
          variant="warning"
          className="full-width"
          block
          onClick={() => {
            dispatch(push("/record"));
            Mixpanel.track("click to inventory record page");
          }}
        >
          Catat Pembelian
        </Button>
        <hr />
        <Button
          size="sm"
          variant="warning"
          className="full-width"
          block
          onClick={() => {
            dispatch(push("/report"));
            Mixpanel.track("click to inventory report page");
          }}
        >
          Laporan
        </Button>
      </div>
    </div>
  );
}
export default Inventory;

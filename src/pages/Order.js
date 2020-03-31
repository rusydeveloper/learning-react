import React from "react";

import { useSelector } from "react-redux";
import OrderList from "../components/OrderList";

function Order() {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <OrderList products={cart.items} />{" "}
    </div>
  );
}
export default Order;

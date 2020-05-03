import React from "react";
import { useDispatch } from "react-redux";
import OrderItem from "../components/OrderItem";

function OrderList(props) {
  return (
    <div>
      <div className="section-label">
        <label>Konfirmasi Pesanan</label>
      </div>

      {props.carts.map((cart, index) => (
        <div>
          <OrderItem cart={cart} index={index} />
        </div>
      ))}
    </div>
  );
}
export default OrderList;

import React from "react";
import OrderItem from "../components/OrderItem";

function OrderList(props) {
  return (
    <div>
      <div className="section-label">
        <label>Konfirmasi Pesanan</label>
      </div>

      {props.carts.map((cart, index) => (
        <div>
          <OrderItem cart={cart} index={index} key={index} />
        </div>
      ))}
    </div>
  );
}
export default OrderList;

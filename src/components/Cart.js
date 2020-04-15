import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="cart-container">
        {" "}
        {cart.totalItem} Barang | Rp{" "}
        {cart.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        <Button
          size="sm"
          block
          variant="warning"
          onClick={() => dispatch(push("/order"))}
        >
          selesai
        </Button>
      </Card>
    </div>
  );
}

export default Cart;

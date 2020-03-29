import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.cart);
  return (
    <div>
      <Card className="cart-container">
        {" "}
        {cart.totalItem} Barang | Rp{" "}
        {cart.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        <Button size="sm" block variant="danger">
          selesai
        </Button>
      </Card>
    </div>
  );
}

export default Cart;

import React from "react";
import { Card, Button } from "react-bootstrap";
function Cart() {
  return (
    <div>
      <Card className="cart-container">
        {" "}
        0 Barang | Rp 0
        <Button size="sm" block variant="danger">
          selesai
        </Button>
      </Card>
    </div>
  );
}

export default Cart;

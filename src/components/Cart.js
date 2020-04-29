import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginBeforeCart } from "../actions";

import { push } from "connected-react-router";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <div>
      {cart.totalItem > 0 ? (
        <Card className="cart-container">
          {" "}
          {cart.totalItem} Barang Terpilih
          <Button
            size="sm"
            block
            variant="warning"
            onClick={() => dispatch(checkLoginBeforeCart(user.id))}
          >
            selesai
          </Button>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;

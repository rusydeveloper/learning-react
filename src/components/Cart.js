import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { checkLoginBeforeCart } from "../actions";

import { Mixpanel } from "../components/Mixpanel";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <div>
      {cart.totalItem > 0 ? (
        <Card className="cart-container">
          {" "}
          {cart.items.length} Barang Terpilih
          <Button
            size="sm"
            block
            variant="warning"
            onClick={() => {
              dispatch(checkLoginBeforeCart(user.id));
              Mixpanel.track("click cart finish button");
            }}
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

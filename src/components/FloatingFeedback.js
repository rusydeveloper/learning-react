import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function FloatingFeedback() {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        class="feedback"
        onClick={() => {
          dispatch(push("/feedback"));
        }}
      >
        <span className="fa fa-paper-plane"></span>Masukan
      </div>
    </div>
  );
}
export default FloatingFeedback;

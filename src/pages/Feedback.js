import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Help from "../components/Help";

import { Mixpanel } from "../components/Mixpanel";
import { checkFeedbackLogin } from "../actions";

function Feedback() {
  Mixpanel.track("view feedback page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkFeedbackLogin(user.id));
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <Help
        phone="08211-777-0072"
        wa="6282117770072"
        message="Saya mau bertanya tentang program belanja bersama"
      ></Help>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdLTLWyqJqsBSOT0X7FjyPuqDkZfM47CGNoHztsOJj3oWl7Aw/viewform?embedded=true"
        width="350"
        height="800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="feedback form"
      >
        Harap tunggu
      </iframe>
    </div>
  );
}
export default Feedback;

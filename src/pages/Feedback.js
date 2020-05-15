import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Mixpanel } from "../components/Mixpanel";
import { checkFeedbackLogin } from "../actions";
import HeaderNav from "../components/HeaderNav";

function Feedback() {
  Mixpanel.track("view feedback page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkFeedbackLogin(user.id));
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <HeaderNav title="Masukan"></HeaderNav>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeHHKyGpnKBm7rwPk7a25YVJirk1vxvcM8LOLCagWIaYL0fAA/viewform?embedded=true"
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

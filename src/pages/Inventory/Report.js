import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Mixpanel } from "../../components/Mixpanel";

import HeaderNav from "../../components/HeaderNav";

function Report() {
  Mixpanel.track("view feedback page");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(checkFeedbackLogin(user.id));
  }, [dispatch, user]);

  return (
    <div className="page-container">
      <HeaderNav title="Laporan Toko"></HeaderNav>
    </div>
  );
}
export default Report;

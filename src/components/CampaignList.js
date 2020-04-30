import React from "react";

import CampaignItem from "./CampaignItem";
import { useSelector } from "react-redux";

function CampaignList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="flex-container">
        {props.campaigns.map((campaign, i) => (
          <div key={i}>
            <CampaignItem campaign={campaign} cart={cart} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default CampaignList;

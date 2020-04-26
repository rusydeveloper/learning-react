import React from "react";

import CampaignItem from "./CampaignItem";
import { useSelector } from "react-redux";

function CampaignList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div class="flex-container">
        {props.campaigns.map((campaign) => (
          <div>
            <CampaignItem campaign={campaign} cart={cart} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default CampaignList;

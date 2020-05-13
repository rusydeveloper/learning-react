import React from "react";

import CampaignItem from "./CampaignItem";
import { useSelector } from "react-redux";
import productNotFound from "../assets/product-not-found.png";

function CampaignList(props) {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {props.campaigns.length > 0 ? (
        <div className="flex-campaign-container">
          {props.campaigns.map((campaign, i) => (
            <div key={i}>
              <CampaignItem campaign={campaign} cart={cart} key={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="product-not-found-container">
          <img src={productNotFound} className="product-not-found" alt="logo" />
        </div>
      )}
    </div>
  );
}
export default CampaignList;

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCartOrder } from "../actions";
import { useDispatch } from "react-redux";
import { server } from "../constants/server";

function CampaignItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";
  const [count, setCount] = useState(0);
  function timer() {
    var text = "";
    const now = new Date();
    const end_campaign = new Date(props.campaign.end_at);
    var d = end_campaign - now;
    var weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
    var days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
    var hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
    var minutes = Math.floor(
      d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60
    );
    var seconds = Math.floor(
      d / 1000 -
        weekdays * 7 * 24 * 60 * 60 -
        days * 24 * 60 * 60 -
        hours * 60 * 60 -
        minutes * 60
    );
    var milliseconds = Math.floor(
      d -
        weekdays * 7 * 24 * 60 * 60 * 1000 -
        days * 24 * 60 * 60 * 1000 -
        hours * 60 * 60 * 1000 -
        minutes * 60 * 1000 -
        seconds * 1000
    );
    if (days > 0) {
      text = "sisa " + days + " hari lagi";
    } else {
      text = hours + " jam " + minutes + " menit lagi";
    }
    return text;
  }
  return (
    <div class="card card-campaign">
      {props.campaign.image ? (
        <div>
          {" "}
          <img
            class="card-img-top campaign-icon image-fit "
            src={server_url + props.campaign.image}
            alt="image"
            onError={(e) => {
              e.target.src = defaultProductImage;
              e.target.alt = "broken";
            }}
          />
        </div>
      ) : (
        <img
          class="card-img-top campaign-icon"
          src={defaultProductImage}
          alt="no link"
        />
      )}

      <div class="card-body">
        <p class="card-text">
          <div className="product-title">{props.campaign.product.name}</div>
          <br />
          <span className="product-tiering-price">
            * Rp{" "}
            {props.campaign.product_tiering_price_1
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
          {"  "}
          <span className="product-initial-price">
            Rp{" "}
            {props.campaign.product_initial_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
          <br />
          <div class="campaign-container">
            <div class="progress">
              <div
                class="progress-bar progress-bar-success progress-bar-striped active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width:
                    (props.campaign.quantity_ordered /
                      props.campaign.product_tiering_quota_1) *
                      100 +
                    "%",
                }}
              >
                {(props.campaign.quantity_ordered /
                  props.campaign.product_tiering_quota_1) *
                  100}{" "}
                %
              </div>
            </div>

            <div className="campaign-target">
              <b>{props.campaign.quantity_ordered} pcs</b> pesanan terkumpul
              dari target <b>{props.campaign.product_tiering_quota_1} pcs</b>
            </div>
            <div className="campaign-duration"> {timer()}</div>
          </div>
          {/* {count > 0 ? (
            <div>
              <Button
                size="sm"
                variant="light"
                onClick={() => {
                  dispatch(minusCart(props.product));
                  setCount(count - 1);
                }}
              >
                -{" "}
              </Button>
              <span class="count-product-order">{count}</span>
              <Button
                size="sm"
                variant="warning"
                onClick={() => {
                  dispatch(plusCart(props.product));
                  setCount(count + 1);
                }}
              >
                +{" "}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size="sm"
                variant="warning"
                block
                onClick={() => {
                  dispatch(addCart(props.product));
                  setCount(count + 1);
                }}
              >
                pesan
              </Button>
            </div>
          )} */}
          <div>
            <Button
              size="sm"
              variant="warning"
              block
              onClick={() => {
                dispatch(addCartOrder(props.campaign, props.campaign.id));
                setCount(count + 1);
              }}
            >
              pesan
            </Button>
          </div>
        </p>
        <span class="campaign-notes">*syarat & ketentuan berlaku</span>
      </div>
    </div>
  );
}
export default CampaignItem;

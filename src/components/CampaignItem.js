import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import { addCartOrder, checkOrdered } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { server } from "../constants/server";

function CampaignItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";
  const [count, setCount] = useState(0);
  const [isOrdered, setOrdered] = useState(false);
  const cart = useSelector((state) => state.cart);

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

    if (days > 0) {
      text = "sisa " + days + " hari lagi";
    } else {
      text = hours + " jam " + minutes + " menit lagi";
    }
    return text;
  }

  useEffect(() => {
    setOrdered(dispatch(checkOrdered(props.campaign.product_id, cart.items)));
  }, [dispatch]);

  return (
    <div className="card card-campaign">
      {props.campaign.product.image ? (
        <div>
          {" "}
          <img
            className="card-img-top campaign-icon image-fit "
            src={server_url + props.campaign.product.image}
            alt="image"
            onError={(e) => {
              e.target.src = defaultProductImage;
              e.target.alt = "broken";
            }}
          />
        </div>
      ) : (
        <img
          className="card-img-top campaign-icon"
          src={defaultProductImage}
          alt="no link"
        />
      )}

      <div className="card-body">
        <div className="card-text">
          <div className="campaign-product-title">
            {props.campaign.product.name}
          </div>
          <br />
          <small>harga saat ini</small>
          <div className="product-initial-price">
            Rp{" "}
            {props.campaign.product_initial_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            <span className="campaign-unit">per {props.campaign.unit}</span>
          </div>

          <br />
          <div className="campaign-container">
            <div className="progress">
              <div
                className="progress-bar progress-bar-success progress-bar-striped progress-bar-animated active"
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
              {props.campaign.product_tiering_quota_1 -
                props.campaign.quantity_ordered <=
              0 ? (
                <div>
                  Harga saat ini Rp{" "}
                  {props.campaign.product_tiering_price_1
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </div>
              ) : (
                <div>
                  Tersisa{" "}
                  <b>
                    <span className="product-tiering-price">
                      {props.campaign.product_tiering_quota_1 -
                        props.campaign.quantity_ordered}{" "}
                      pcs
                    </span>
                  </b>{" "}
                  lagi menuju harga <br />
                  <span className="product-tiering-price">
                    *Rp{" "}
                    {props.campaign.product_tiering_price_1
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>{" "}
                  per {props.campaign.unit}
                </div>
              )}
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
              <span className="count-product-order">{count}</span>
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
            {isOrdered ? (
              <Button
                size="sm"
                variant="secondary"
                block
                disabled
                onClick={() => {
                  setOrdered(false);
                }}
              >
                sudah dipilih
              </Button>
            ) : (
              <Button
                size="sm"
                variant="warning"
                block
                onClick={() => {
                  dispatch(
                    addCartOrder(
                      props.campaign,
                      props.campaign.id,
                      props.campaign.product.image
                    )
                  );
                  setCount(count + 1);
                  setOrdered(true);
                }}
              >
                pesan
              </Button>
            )}
          </div>
        </div>
        <span className="campaign-notes">*syarat & ketentuan berlaku</span>
      </div>
    </div>
  );
}
export default CampaignItem;

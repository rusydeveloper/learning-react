import React, { useState, useEffect } from "react";
import { Lazy } from "react-lazy";
import { Button } from "react-bootstrap";
import defaultProductImage from "../assets/open-box.png";
import {
  addCartOrder,
  checkOrdered,
  checkLoginBeforeCart,
  loadSupplier,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { server } from "../constants/server";
import { Mixpanel } from "../components/Mixpanel";
import Timer from "./Timer";

function CampaignItem(props) {
  const dispatch = useDispatch();
  const server_url = server + "/";
  const [count, setCount] = useState(0);
  const [isOrdered, setOrdered] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  let quota_left = 0;
  let tier_quota = 0;
  let tier_price = 0;

  const tieringCase = (
    order,
    initial_price,
    tiering1,
    tiering2,
    tiering3,
    price1,
    price2,
    price3
  ) => {
    var progress_tiering_1 = 0;
    var progress_tiering_2 = 0;
    if (tiering2 > tiering1) {
      if (tiering3 > tiering2) {
        if (order < tiering1) {
          //if tiering price for lv 3, order still progress for tier 1
          // setCurrentPrice(price1);
          progress_tiering_1 = 33 - (order / tiering3) * 100;
          progress_tiering_2 = 33;
          quota_left = tiering1 - order;
          if (quota_left < 0) {
            quota_left = 0;
          }
          tier_quota = tiering1;
          tier_price = price1;
          return (
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (order / tiering3) * 100 + "%",
                }}
              >
                <span className="bar-text"></span>
              </div>
              <div
                className="progress-bar bg-custom"
                role="progressbar"
                style={{
                  width: progress_tiering_1 + "%",
                  borderRight: "3px solid black",
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                className="progress-bar bg-custom-2"
                role="progressbar"
                style={{
                  width: progress_tiering_2 + "%",
                  borderRight: "3px solid black",
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          );
        } else if (order < tiering2) {
          //if tiering price for lv 3, order still progress for tier 2
          // setCurrentPrice(price1);
          progress_tiering_2 = 66 - (order / tiering3) * 100;
          quota_left = tiering2 - order;
          if (quota_left < 0) {
            quota_left = 0;
          }
          tier_quota = tiering2;
          tier_price = price2;
          return (
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (order / tiering3) * 100 + "%",
                }}
              >
                <span className="bar-text"></span>
              </div>

              <div
                class="progress-bar bg-custom-2"
                role="progressbar"
                style={{
                  width: progress_tiering_2 + "%",
                  borderRight: "3px solid black",
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          );
        } else {
          //if tiering price for lv 3, order progress for tier 3
          quota_left = tiering3 - order;
          if (quota_left < 0) {
            quota_left = 0;
          }
          tier_quota = tiering3;
          tier_price = price3;

          return (
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (order / tiering3) * 100 + "%",
                }}
              >
                <span className="bar-text"></span>
              </div>
            </div>
          );
        }
      } else {
        console.log("tier Lv 2");
        if (order < tiering1) {
          //if tiering price for lv 2, order still progress for tier 1
          // setCurrentPrice(price1);
          progress_tiering_1 = 50 - (order / tiering2) * 100;
          quota_left = tiering1 - order;
          if (quota_left < 0) {
            quota_left = 0;
          }
          tier_quota = tiering1;
          tier_price = price1;
          console.log(progress_tiering_1);
          return (
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (order / tiering2) * 100 + "%",
                }}
              >
                <span className="bar-text"></span>
              </div>
              <div
                class="progress-bar bg-custom"
                role="progressbar"
                style={{
                  width: progress_tiering_1 + "%",
                  borderRight: "3px solid black",
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          );
        } else {
          //if tiering price for lv 2, order progress for tier 2
          // setCurrentPrice(price1);
          progress_tiering_1 = 0;
          quota_left = tiering2 - order;
          if (quota_left < 0) {
            quota_left = 0;
          }
          tier_quota = tiering2;
          tier_price = price2;
          return (
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (order / tiering2) * 100 + "%",
                }}
              >
                <span className="bar-text"></span>
              </div>
            </div>
          );
        }
      }
    } else {
      console.log("tier Lv 1");
      //if tiering price for lv 1, order progress for tier 1
      // setCurrentPrice(price1);
      quota_left = tiering1 - order;
      if (quota_left < 0) {
        quota_left = 0;
      }
      tier_quota = tiering1;
      tier_price = price1;
      return (
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-warning progress-bar-striped progress-bar-animated  active"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: (order / tiering1) * 100 + "%",
            }}
          >
            <span className="bar-text"></span>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    setOrdered(dispatch(checkOrdered(props.campaign.product_id, cart.items)));
  }, [dispatch, props, cart]);

  return (
    <div className="card-campaign">
      {props.campaign.product.image ? (
        <div>
          {" "}
          <Lazy
            component="a"
            href="/"
            className="image-link image-link--100px"
            ltIE9
          >
            <img
              className="card-img-top campaign-icon image-fit"
              src={server_url + props.campaign.product.image}
              alt="tidak ada gambar"
              onError={(e) => {
                e.target.src = defaultProductImage;
                e.target.alt = "broken";
              }}
            />
          </Lazy>
        </div>
      ) : (
        <Lazy
          component="a"
          href="/"
          className="image-link image-link--100px"
          ltIE9
        >
          <img
            className="card-img-top campaign-icon image-fit"
            src={defaultProductImage}
            alt="no link"
          />
        </Lazy>
      )}

      <div className="card-body-campaign">
        <div className="card-text">
          <div className="campaign-product-title">
            {props.campaign.product.name} [<span>{props.campaign.unit}</span>]{" "}
            <span className="campaign-title-text">{props.campaign.title}</span>
          </div>
          <br />
          <div className="product-initial-price">
            Rp{" "}
            {props.campaign.product_initial_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          </div>

          <div className="campaign-container">
            {tieringCase(
              props.campaign.quantity_ordered,
              props.campaign.product_initial_price,
              props.campaign.product_tiering_quota_1,
              props.campaign.product_tiering_quota_2,
              props.campaign.product_tiering_quota_3,
              props.campaign.product_tiering_price_1,
              props.campaign.product_tiering_price_2,
              props.campaign.product_tiering_price_3
            )}

            <div className="product-tiering-price">
              <span className="campaign-tiering-price">
                Rp {tier_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
              <br />
              <span className="campaign-term">
                Jika {tier_quota} pesanan tercapai
              </span>
            </div>
            <div className="flex-container-campaign">
              <div>
                <span className="text-campaign">
                  {props.campaign.quantity_ordered}
                </span>{" "}
                Pesanan
              </div>
              {quota_left > 0 ? (
                <div>
                  <span className="text-campaign">{quota_left} </span>
                  <br />
                  Sisa kuota
                </div>
              ) : (
                <div className="campaign-achived">
                  Kuota
                  <br />
                  Tercapai
                </div>
              )}
            </div>

            <div className="campaign-duration">
              {" "}
              Batas pesan
              <table className="timer-table">
                <Timer deadline={props.campaign.end_at} />
              </table>
            </div>
          </div>

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
                className="full-width"
                block
                onClick={() => {
                  dispatch(
                    addCartOrder(
                      props.campaign,
                      props.campaign.id,
                      props.campaign.product.image
                    )
                  );
                  // dispatch(checkLoginBeforeCart(user.id));
                  // dispatch(loadSupplier(props.campaign.business.unique_id));

                  setCount(count + 1);
                  setOrdered(true);
                  Mixpanel.track("click add campaign product to cart button");
                }}
              >
                pesan
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CampaignItem;

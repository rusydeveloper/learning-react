import React, { useEffect } from "react";
import CampaignList from "../components/CampaignList";
import Help from "../components/Help";
import { Badge, Navbar } from "react-bootstrap";
import Cart from "../components/Cart";
import { Mixpanel } from "../components/Mixpanel";
import {
  loadProducts,
  loadCategories,
  loadCampaigns,
  searchProduct,
  selectCategory,
  checkBalance,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import ReactGA from "react-ga";
import Footer from "../components/Footer";

function Product() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  Mixpanel.track("view product page");

  useEffect(() => {
    dispatch(loadCampaigns());
    dispatch(loadCategories());
    dispatch(checkBalance(user.id));
    ReactGA.pageview("/product");
  }, [dispatch, user]);

  const campaigns = useSelector((state) => state.campaign.items);
  const categories = useSelector((state) => state.product.categories);

  return (
    <div>
      <Navbar sticky="top">
        <div className="search-container">
          <input
            className="search-box"
            onChange={(event) => dispatch(searchProduct(event.target.value))}
            placeholder="Cari nama barang"
          />
        </div>
      </Navbar>
      <hr />
      <Help
        phone="08211-777-0072"
        wa="6282117770072"
        message="Saya mau bertanya tentang program belanja bersama"
      ></Help>
      <label>Belanja Bersama</label>
      <hr />
      <div className="horizontal-scroll">
        <Badge
          variant="warning"
          className="horizontal-menu "
          onClick={() => {
            dispatch(loadProducts());
            dispatch(loadCampaigns());
          }}
        >
          Semua
        </Badge>
        {categories.map((category, i) => (
          <Badge
            key={i}
            variant="warning"
            className="horizontal-menu "
            onClick={() => dispatch(selectCategory(category.id))}
          >
            {category.name}
          </Badge>
        ))}{" "}
      </div>
      <hr />
      <CampaignList campaigns={campaigns} />
      <hr />
      <Footer />

      <Cart></Cart>
    </div>
  );
}
export default Product;

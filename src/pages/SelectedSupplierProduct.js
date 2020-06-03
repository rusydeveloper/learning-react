import React, { useEffect } from "react";
import CampaignList from "../components/CampaignList";
import Help from "../components/Help";
import { Badge, Navbar } from "react-bootstrap";
import Cart from "../components/Cart";
import { Mixpanel } from "../components/Mixpanel";
import {
  loadProductsSelectedSupplier,
  loadCategoriesSelectedSupplier,
  loadCampaignsSelectedSupplier,
  searchProductSelectedSupplier,
  selectCategorySelectedSupplier,
  checkBalance,
  checkEmptyCart,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import ReactGA from "react-ga";

function Product() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const supplier = useSelector((state) => state.selectedSupplier);

  Mixpanel.track("view product selected supplier page");

  useEffect(() => {
    dispatch(loadCampaignsSelectedSupplier(supplier.supplier.unique_id));
    dispatch(loadCategoriesSelectedSupplier(supplier.supplier.unique_id));
    dispatch(checkEmptyCart(cart));
    dispatch(checkBalance(user.id));
    ReactGA.pageview("/product");
  }, [dispatch, user, supplier, cart]);

  const campaigns = useSelector((state) => state.campaign.items);
  const categories = useSelector((state) => state.product.categories);

  return (
    <div className="page-container">
      <Navbar sticky="top">
        <div className="search-container">
          <input
            className="search-box"
            onChange={(event) =>
              dispatch(
                searchProductSelectedSupplier(
                  event.target.value,
                  supplier.supplier.unique_id
                )
              )
            }
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
            dispatch(loadProductsSelectedSupplier(supplier.supplier.unique_id));
            dispatch(
              loadCampaignsSelectedSupplier(supplier.supplier.unique_id)
            );
          }}
        >
          Semua
        </Badge>
        {categories.map((category, i) => (
          <Badge
            key={i}
            variant="warning"
            className="horizontal-menu "
            onClick={() =>
              dispatch(
                selectCategorySelectedSupplier(
                  category.id,
                  supplier.supplier.unique_id
                )
              )
            }
          >
            {category.name}
          </Badge>
        ))}{" "}
      </div>
      <hr />
      <CampaignList campaigns={campaigns} />
      <hr />
      <br />
      <br />
      <br />

      <Cart></Cart>
    </div>
  );
}
export default Product;

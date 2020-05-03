import React, { useEffect } from "react";
import CampaignList from "../components/CampaignList";
import ProductList from "../components/ProductList";
import { Badge, Pagination, Row, Col, Navbar } from "react-bootstrap";
import Cart from "../components/Cart";
import {
  loadProducts,
  loadCategories,
  loadCampaigns,
  searchProduct,
  selectCategory,
  loadProductPageUrl,
  checkBalance,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCampaigns());
    dispatch(loadCategories());
    dispatch(checkBalance(user.id));
  }, [dispatch]);

  const products = useSelector((state) => state.product.items);
  const campaigns = useSelector((state) => state.campaign.items);
  const categories = useSelector((state) => state.product.categories);
  const next_page_url = useSelector((state) => state.product.next_page_url);
  const prev_page_url = useSelector((state) => state.product.prev_page_url);
  const first_page_url = useSelector((state) => state.product.first_page_url);
  const last_page_url = useSelector((state) => state.product.last_page_url);
  const current_page = useSelector((state) => state.product.current_page);
  const last_page = useSelector((state) => state.product.last_page);
  const total = useSelector((state) => state.product.total);

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
      <label>Belanja Bersama</label>
      <CampaignList campaigns={campaigns} /> <hr />
      <div className="horizontal-scroll">
        <Badge
          variant="warning"
          className="horizontal-menu "
          onClick={() => dispatch(loadProducts())}
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
      <label>Belanja Satuan</label>
      <br />
      <small className="small-header">
        total: {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} produk,
        halaman {current_page} dari {last_page}
      </small>
      <ProductList products={products} />
      <Row>
        <Col></Col>
        <Col>
          <Pagination>
            {current_page != 1 ? (
              <div className="flex-container-nowrap">
                <div>
                  <Pagination.First
                    onClick={() => dispatch(loadProductPageUrl(first_page_url))}
                  />
                </div>
                <div>
                  <Pagination.Prev
                    onClick={() => dispatch(loadProductPageUrl(prev_page_url))}
                  />
                </div>
              </div>
            ) : null}

            <Pagination.Item active>{current_page}</Pagination.Item>
            {current_page != last_page ? (
              <div className="flex-container-nowrap">
                <div>
                  <Pagination.Next
                    onClick={() => dispatch(loadProductPageUrl(next_page_url))}
                  />
                </div>
                <div>
                  <Pagination.Last
                    onClick={() => dispatch(loadProductPageUrl(last_page_url))}
                  />
                </div>
              </div>
            ) : null}
          </Pagination>
        </Col>
        <Col></Col>
      </Row>
      <Cart></Cart>
    </div>
  );
}
export default Product;

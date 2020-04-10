import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { Badge, Pagination, Row, Col } from "react-bootstrap";
import Cart from "../components/Cart";
import {
  loadProducts,
  loadCategories,
  searchProduct,
  selectCategory,
  loadProductPageUrl,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, []);

  const products = useSelector((state) => state.product.items);
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
      <div>
        <div className="search-container">
          <input
            className="search-box"
            onChange={(event) => dispatch(searchProduct(event.target.value))}
            placeholder="Cari nama barang"
          />
        </div>
        <hr />
      </div>
      <div className="horizontal-scroll">
        <Badge
          variant="warning"
          className="horizontal-menu "
          onClick={() => dispatch(loadProducts())}
        >
          Semua
        </Badge>
        {categories.map((category) => (
          <Badge
            variant="warning"
            className="horizontal-menu "
            onClick={() => dispatch(selectCategory(category.id))}
          >
            {category.name}
          </Badge>
        ))}{" "}
      </div>
      <hr />
      <small className="small-header">
        total: {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} produk,
        halaman {current_page} dari {last_page}
      </small>
      <ProductList products={products} />{" "}
      <Row>
        <Col></Col>
        <Col>
          <Pagination>
            <Pagination.First
              onClick={() => dispatch(loadProductPageUrl(first_page_url))}
            />
            <Pagination.Prev
              onClick={() => dispatch(loadProductPageUrl(prev_page_url))}
            />

            <Pagination.Item active>{current_page}</Pagination.Item>

            <Pagination.Next
              onClick={() => dispatch(loadProductPageUrl(next_page_url))}
            />
            <Pagination.Last
              onClick={() => dispatch(loadProductPageUrl(last_page_url))}
            />
          </Pagination>
        </Col>
        <Col></Col>
      </Row>
      <Cart></Cart>
    </div>
  );
}
export default Product;

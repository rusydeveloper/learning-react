import React, { Component } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { Badge, Pagination, Row, Col, Navbar } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";

class Product extends Component {
  constructor(props) {
    super(props);
    this.url_api = "http://159.65.13.206";
    this.state = {
      products: [],
      next_page_url: "",
      prev_page_url: "",
      first_page_url: "",
      last_page_url: "",
      categories: [],
      search: "",
      current_page: 0,
      last_page: 0,
      total: 0
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.changePage = this.changePage.bind(this);
    this.allCategory = this.allCategory.bind(this);
  }
  searchProduct(event) {
    this.setState({ search: event.target.value });
    axios
      .get(this.url_api + "/api/product/search/" + this.state.search)
      .then(response => {
        this.setState({
          products: response.data.data,
          total: response.data.total,
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          next_page_url: response.data.next_page_url,
          prev_page_url: response.data.prev_page_url,
          first_page_url: response.data.first_page_url,
          last_page_url: response.data.last_page_url
        });
      });
  }

  allCategory(e) {
    axios.get(this.url_api + "/api/product/").then(response => {
      this.setState({
        products: response.data.data,
        total: response.data.total,
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
        prev_page_url: response.data.prev_page_url,
        first_page_url: response.data.first_page_url,
        last_page_url: response.data.last_page_url
      });
    });
  }

  selectCategory(id, e) {
    axios.get(this.url_api + "/api/product/category/" + id).then(response => {
      this.setState({
        products: response.data.data,
        total: response.data.total,
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
        prev_page_url: response.data.prev_page_url,
        first_page_url: response.data.first_page_url,
        last_page_url: response.data.last_page_url
      });
    });
  }

  changePage(url, e) {
    axios.get(url).then(response => {
      this.setState({
        products: response.data.data,
        total: response.data.total,
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
        prev_page_url: response.data.prev_page_url,
        first_page_url: response.data.first_page_url,
        last_page_url: response.data.last_page_url
      });
    });
  }
  componentDidMount() {
    axios.get(this.url_api + "/api/product").then(response => {
      this.setState({
        products: response.data.data,
        total: response.data.total,
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
        prev_page_url: response.data.prev_page_url,
        first_page_url: response.data.first_page_url,
        last_page_url: response.data.last_page_url
      });
    });

    axios.get(this.url_api + "/api/category").then(response => {
      this.setState({
        categories: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          {/* <Navbar.Brand href="/"></Navbar.Brand>
           */}
          <div className="input-group search-section">
            <div className="input-group-prepend">
              <a href="/">
                <img src={logoFKBK} className="App-logo" alt="logo" />
              </a>
            </div>
            <input
              className="search-box"
              onChange={this.searchProduct}
              value={this.state.search}
              placeholder="Cari nama barang"
            />
          </div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Produk</Nav.Link>
              <Nav.Link href="/monitoring">Monitoring</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
        <br />
        <br />
        <hr />
        <div className="horizontal-scroll">
          <Badge
            variant="warning"
            className="horizontal-menu "
            onClick={e => this.allCategory(e)}
          >
            Semua
          </Badge>
          {this.state.categories.map(category => (
            <Badge
              variant="warning"
              className="horizontal-menu "
              onClick={e => this.selectCategory(category.id, e)}
            >
              {category.name}
            </Badge>
          ))}{" "}
        </div>
        <hr />
        <small className="small-header">
          total:{" "}
          {this.state.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          produk, halaman {this.state.current_page} dari {this.state.last_page}
        </small>
        <ProductList products={this.state.products} />{" "}
        <Row>
          <Col></Col>
          <Col>
            <Pagination>
              <Pagination.First
                onClick={e => this.changePage(this.state.first_page_url, e)}
              />
              <Pagination.Prev
                onClick={e => this.changePage(this.state.prev_page_url, e)}
              />

              <Pagination.Item active>
                {this.state.current_page}
              </Pagination.Item>

              <Pagination.Next
                onClick={e => this.changePage(this.state.next_page_url, e)}
              />
              <Pagination.Last
                onClick={e => this.changePage(this.state.last_page_url, e)}
              />
            </Pagination>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
export default Product;

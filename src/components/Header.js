import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.url_api = "http://159.65.13.206";
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src={logoFKBK} className="App-logo" alt="logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Produk</Nav.Link>
              <Nav.Link href="/monitoring">Monitoring</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}
export default Header;

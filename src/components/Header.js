import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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
          {/* <Navbar.Toggle
            style={{ fontSize: "5pt" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <BrowserRouter>
                <Nav.Link>
                  <Link className="navbar-brand" to="/product">
                    Produk
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navbar-brand" to="/dashboard">
                    Dashboard
                  </Link>
                </Nav.Link>
              </BrowserRouter>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}
export default Header;

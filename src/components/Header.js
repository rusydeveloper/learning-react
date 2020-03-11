import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.url_api = "https://fkbk-api.nectico.com";
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src={logoFKBK} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar>
        <Link className="navbar-brand" to="/">
          Produk
        </Link>
        <Link className="navbar-brand" to="/dashboard">
          Dashboard
        </Link>
        <Link className="navbar-brand" to="/login">
          Masuk
        </Link>
        <Link className="navbar-brand" to="/signup">
          Daftar
        </Link>
      </div>
    );
  }
}
export default Header;

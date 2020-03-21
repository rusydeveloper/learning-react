import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedHeader extends Component {
  constructor(props) {
    super(props);
    this.url_api = "https://fkbk-api.nectico.com";
  }

  render() {
    return (
      <div>
        test :{" "}
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src={logoFKBK} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar>
        <Nav className="mr-auto">
          <Nav>
            <Link className="navbar" to="/">
              Produk
            </Link>
          </Nav>
          <Nav>
            <Link className="navbar" to="/dashboard">
              Dashboard
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Akun" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.3">
                <Link className="navbar-brand" to="/login">
                  Masuk
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                <Link className="navbar-brand" to="/signup">
                  Daftar
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
      </div>
    );
  }
}
const Header = connect(mapStateToProps)(ConnectedHeader);
export default Header;

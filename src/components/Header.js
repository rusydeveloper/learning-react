import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions";

function Header() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
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
          <NavDropdown
            title={isLogged ? "Sudah Masuk" : "Akun"}
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.2" onClick={() => dispatch(logout())}>
              <Link className="navbar" to="/">
                Keluar
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3">
              <Link className="navbar" to="/login">
                Masuk
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">
              <Link className="navbar" to="/signup">
                Daftar
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Nav>
    </div>
  );
}

export default Header;

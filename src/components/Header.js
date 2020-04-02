import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoFKBK from "../assets/logo-fkbk.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions";
import { push } from "connected-react-router";

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
      {/* <Nav className="mr-auto">
        <Nav>
          <Link className="navbar" to="/">
            Produk
          </Link>
        </Nav>
        {isLogged ? (
          <Nav>
            <Link className="navbar" to="/dashboard">
              Dashboard
            </Link>
          </Nav>
        ) : null}

        <Nav>
          <NavDropdown
            title={isLogged ? "Sudah Masuk" : "Akun"}
            id="nav-dropdown"
          >
            {isLogged ? (
              <NavDropdown.Item
                eventKey="4.2"
                onClick={() => dispatch(logout())}
              >
                Keluar
              </NavDropdown.Item>
            ) : (
              <span>
                <NavDropdown.Item
                  eventKey="4.3"
                  onClick={() => dispatch(push("/login"))}
                >
                  Masuk
                </NavDropdown.Item>{" "}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  eventKey="4.4"
                  onClick={() => dispatch(push("/signup"))}
                >
                  Daftar
                </NavDropdown.Item>
              </span>
            )}
          </NavDropdown>
        </Nav>
      </Nav> */}
    </div>
  );
}

export default Header;

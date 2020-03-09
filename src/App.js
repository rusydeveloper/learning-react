import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Header></Header>
          <Row>
            <Col>
              <Link className="navbar-brand" to="/">
                Produk
              </Link>
              <Link className="navbar-brand" to="/dashboard">
                Dashboard
              </Link>
              <Link className="navbar-brand" to="/login">
                Login
              </Link>
              <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/dashboard" component={Monitoring} />
                <Route path="/login" component={Login} />
              </Switch>
            </Col>
          </Row>
          <Footer></Footer>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;

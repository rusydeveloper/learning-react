import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Page3 from "./pages/Page3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <Row>
          <Col>
            <BrowserRouter>
              <Link className="navbar-brand" to="/product">
                Product
              </Link>
              <Link className="navbar-brand" to="/dashboard">
                Dashboard
              </Link>
              <Link className="navbar-brand" to="/page3">
                Page3
              </Link>
              <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/dashboard" component={Monitoring} />
                <Route path="/page3" component={Page3} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
  }
}

export default App;

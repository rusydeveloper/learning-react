import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Login from "./pages/Login";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Order from "./pages/Order";
import Invoice from "./pages/Invoice";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-142772318-4");

  return (
    <Container>
      <Header></Header>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/order" component={Order} />
            <Route path="/invoice" component={Invoice} />
          </Switch>
        </Col>
      </Row>
      <BottomNav></BottomNav>
      <Footer></Footer>
    </Container>
  );
}

export default App;

import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Login from "./pages/Login";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <Container>
      <Header></Header>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/dashboard" component={Monitoring} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/signup" component={Signup} />
            <Route path="/order" component={Order} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Col>
      </Row>
      <BottomNav></BottomNav>
      <Footer></Footer>
    </Container>
  );
}

export default App;

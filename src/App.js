import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./pages/Signup";

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
            <Route path="/signup" component={Signup} />
          </Switch>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
}

export default App;

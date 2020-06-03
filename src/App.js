import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Login from "./pages/Login";
import User from "./pages/User";
import BottomNav from "./components/BottomNav";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Order from "./pages/Order";
import Invoice from "./pages/Invoice";
import ReactGA from "react-ga";
import Feedback from "./pages/Feedback";
import Inventory from "./pages/Inventory";
import SelectedSupplierProduct from "./pages/SelectedSupplierProduct";
import Record from "./pages/Inventory/Record";
import Report from "./pages/Inventory/Report";

function App() {
  ReactGA.initialize("UA-142772318-4");

  return (
    <Container>
      <Row>
        <Col>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/order" component={Order} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/record" component={Record} />
            <Route path="/report" component={Report} />
            <Route
              path="/selectedSupplierProduct"
              component={SelectedSupplierProduct}
            />
          </Switch>
        </Col>
      </Row>
      <BottomNav></BottomNav>
    </Container>
  );
}

export default App;

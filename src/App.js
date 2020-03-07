import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Page3 from "./pages/Page3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
              <Switch>
                <Route exact path="/" component={Product} />
                <Route exact path="/newpage" component={Monitoring} />
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

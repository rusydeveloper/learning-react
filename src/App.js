import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Badge, Nav } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <BrowserRouter>
              {/* <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/product">Product</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Pemesanan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Tentang</Nav.Link>
                </Nav.Item>
              </Nav> */}

              <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

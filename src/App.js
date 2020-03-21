import React from "react";
import "./App.css";
import Product from "./pages/Product";
import Monitoring from "./pages/Monitoring";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./pages/Signup";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Articles</h2>
        </div>
        <div>
          <h2>Add a new article</h2>
          <Form />
        </div>
        <BrowserRouter>
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
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.url_api = "https://fkbk-api.nectico.com";
    this.state = {
      user: [],
      token: "",
      email: "",
      password: ""
    };

    this.login = this.login.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  login(event) {
    this.setState({
      email: this.state.email,
      password: this.state.password
    });
    alert("A name was submitted: " + this.state.email + this.state.password);
    event.preventDefault();
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <Card>
            <Card.Body>
              <Card.Title>Masuk</Card.Title>
              <Card.Text>
                <label>email:</label>
                <br />
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.emailChange}
                  placeholder="email"
                />
                <br />
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.passwordChange}
                  placeholder="password"
                />
                <br />
              </Card.Text>
              <Button type="submit" value="Submit">
                Kirim
              </Button>
            </Card.Body>
            <h4> </h4>
          </Card>
        </form>
      </div>
    );
  }
}
export default Login;

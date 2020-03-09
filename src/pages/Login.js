import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.url_api = "http://159.65.13.206";
    this.state = {
      user: [],
      token: "",
      user_name: "",
      password: ""
    };

    this.login = this.login.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  login(event) {
    this.setState({
      user_name: this.state.user_name,
      password: this.state.password
    });
    alert(
      "A name was submitted: " + this.state.user_name + this.state.password
    );
    event.preventDefault();
  }

  usernameChange(event) {
    this.setState({
      user_name: event.target.value
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
                <label>Name:</label>
                <br />
                <input
                  type="email"
                  value={this.state.user_name}
                  onChange={this.usernameChange}
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
                Sign In
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

import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import List from "../components/List";
import { server } from "../constants/server";

class Login extends Component {
  constructor(props) {
    super(props);
    this.url_api = server;
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
    // alert("A name was submitted: " + this.state.email + this.state.password);
    event.preventDefault();

    const { history } = this.props;

    const loginInput = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(this.url_api + "/api/auth/login", loginInput)
      .then(response => {
        // redirect to the homepage
        sessionStorage.setItem("userData", response.data);
        console.log(response);
        history.push("/");
      })
      .catch(error => {
        if (error != "Error: Network Error") {
          if (error.response.status === 401) {
            alert("email atau password anda salah");
          }
          if (error.response.status === 422) {
            alert("email atau password anda salah");
          }
          this.setState({
            errors: error.response.data.errors
          });
        } else {
          alert(
            "Mohon maaf sistem bermasalah, mohon kembali beberapa saat lagi"
          );
        }
      });
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
        <List />
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
                  required
                />
                <br />
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.passwordChange}
                  placeholder="password"
                  required
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

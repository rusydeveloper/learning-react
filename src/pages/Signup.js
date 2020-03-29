import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.url_api = "https://fkbk-api.nectico.com";
    this.state = {
      user: [],
      token: "",
      email: "",
      phone: "",
      password: "",
      repassword: ""
    };

    this.signup = this.signup.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);

    this.passwordChange = this.passwordChange.bind(this);
    this.repasswordChange = this.repasswordChange.bind(this);
  }

  signup(event) {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      repassword: this.state.repassword
    });
    alert(
      "A name was submitted: " +
        this.state.name +
        this.state.email +
        this.state.password +
        this.state.phone +
        this.state.repassword
    );
    event.preventDefault();
  }
  nameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  phoneChange(event) {
    this.setState({
      phone: event.target.value
    });
  }
  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  repasswordChange(event) {
    this.setState({
      repassword: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.signup}>
          <Card>
            <Card.Body>
              <Card.Title>Daftar</Card.Title>
              <Card.Text>
                <label>Nama:</label>
                <br />
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.nameChange}
                  placeholder="Nama"
                />
                <br />
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.emailChange}
                  placeholder="Email"
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={this.phoneChange}
                  placeholder="Nomor Handphone"
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
                <label>Ulangi Password:</label>
                <br />
                <input
                  type="password"
                  value={this.state.repassword}
                  onChange={this.repasswordChange}
                  placeholder="Ulangi password"
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
export default Signup;

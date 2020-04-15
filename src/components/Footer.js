import React, { Component } from "react";
import logoNectico from "../assets/logo-nectico.png";
import logoDinas from "../assets/logo-dinas.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.url_api = "https://fkbk-api.nectico.com";
    this.state = {};
  }

  render() {
    return <div className="footer"></div>;
  }
}
export default Footer;

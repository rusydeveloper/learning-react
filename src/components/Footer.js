import React, { Component } from "react";
import logoNectico from "../assets/logo-nectico.png";
import logoDinas from "../assets/logo-dinas.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.url_api = "http://159.65.13.206";
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <small className="grey">didukung oleh</small>
        <br></br>
        <img src={logoDinas} className="dinas-logo" alt="logo" />
        <br></br>
        <small className="grey">Dinas Koperasi dan UMKM Kota Bandung</small>
        <br></br>
        <br></br>
        <small className="grey">dibuat oleh</small>
        <br></br>
        <a href="https://www.nectico.com">
          <img src={logoNectico} className="nectico-logo" alt="logo" />
        </a>
        <br></br>
      </div>
    );
  }
}
export default Header;

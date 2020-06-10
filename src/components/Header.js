import React from "react";
import logoDinasBandung from "../assets/logo-bandung-dinas.png";
import logoSejuk from "../assets/logo-sejuk.png";
import logoPoweredNectico from "../assets/logo-powered-nectico.png";

function Header() {
  return (
    <div className="header-container">
      <div className="flex-container-brand">
        {/* <div>
          <img src={logoDinasBandung} className="dinas-logo" alt="logo" />
        </div>
        <div>
          <img src={logoSejuk} className="sejuk-logo" alt="logo" />
        </div> */}
        <div>
          <img
            src={logoPoweredNectico}
            className="powered-nectico-logo"
            alt="logo"
          />
        </div>
      </div>
      <small>Beli barang supplier untuk koperasi</small>
    </div>
  );
}

export default Header;

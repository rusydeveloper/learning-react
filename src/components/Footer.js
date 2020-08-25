import React from "react";
import logoFKBK from "../assets/logo-fkbk.png";
import logoBulog from "../assets/logo-BULOG.png";
import logoDT from "../assets/logo-DT.png";
import logoITB from "../assets/logo-ITB.png";
import logoNectico from "../assets/logo-nectico.png";
import { Lazy } from "react-lazy";

function Footer() {
  return (
    <div>
      <small className="supported-by-text">Supported By</small>
      <div className="flex-container-brand footer-container">
        <div>
          <Lazy ltIE9>
            <img src={logoFKBK} className="logo-footer-fkbk" alt="logo" />
          </Lazy>
        </div>
        <div>
          <Lazy ltIE9>
            <img src={logoBulog} className="logo-footer-fkbk" alt="logo" />
          </Lazy>
        </div>
        <div>
          <img src={logoDT} className="logo-footer-dt" alt="logo" />
        </div>
        <div>
          <img src={logoITB} className="logo-footer-itb" alt="logo" />
        </div>
        <div>
          <img src={logoNectico} className="logo-footer-nectico" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

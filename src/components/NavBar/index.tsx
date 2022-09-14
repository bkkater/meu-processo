import React from "react";

// Icons
import govLogo from "~/resources/icons/gov-logo.svg";
import contrastIcon from "~/resources/icons/contrast.svg";
import librasIcon from "~/resources/icons/libras.svg";

function NavBar() {
  return (
    <nav className="navbar py-3 bg-white shadow">
      <div className="container-lg d-flex align-items-center">
        <a href="https://www.gov.br/pt-br">
          <img src={govLogo} alt="gov.br" />
        </a>

        <div className="icons-content">
          <img src={contrastIcon} alt="auto-contraste" className="icon" />
          <img src={librasIcon} alt="libras" className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

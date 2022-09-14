import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "~/components/Button";

// Icons
import Logo from "~/resources/icons/logo.svg";

import "./styles.scss";

interface ContentHeaderProps {
  searchProcess: boolean;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ searchProcess }) => {
  if (searchProcess) {
    return (
      <div className="content-header-container">
        <div className="link-container">
          <Link to="/Landing" className="link">
            Voltar para pesquisa
          </Link>
          <a href="https://www.gov.br/acessoainformacao/pt-br" className="link">
            ajuda
          </a>
        </div>
        <div className="content-header">
          <img src={Logo} alt="Meu Processo" />
          <Button />
        </div>
      </div>
    );
  }

  return (
    <div className="content-header-container">
      <div className="link-container">
        <a
          href="https://www.gov.br/acessoainformacao/pt-br"
          className="link dif"
        >
          Ajuda
        </a>
      </div>
      <div className="content-header dif">
        <img src={Logo} alt="Meu Processo" />
      </div>
    </div>
  );
};

export default ContentHeader;

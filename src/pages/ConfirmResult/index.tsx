import React from "react";
import { Link } from "react-router-dom";

// Components
import Page from "~/components/Page";
import Card from "~/components/Card";

// Icons
import Illustration from "~/resources/icons/illustration.svg";

import "./styles.scss";

function ConfirmResult() {
  return (
    <Page className="confirm-result">
      <Card className="card-container">
        <span className="h3 fs-4 fw-bold mb-5">
          Paulo, você esta tentando acessar esse processo?
        </span>

        <Card className="card-info">
          <span>De</span>
          <span>Jõao Augusto</span>
        </Card>

        <Card className="card-info">
          <span>Contra</span>
          <span>Correios</span>
        </Card>

        <Link className="link-button mb-5" to="/">
          Prosseguir
        </Link>

        <img src={Illustration} alt="" />
      </Card>
    </Page>
  );
}

export default ConfirmResult;

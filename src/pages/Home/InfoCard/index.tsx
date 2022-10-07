import React from "react";

// Components
import Card from "~/components/Card";

// Icons
import Illustration from "~/resources/icons/illustration.svg";

import "./styles.scss";

function InfoCard() {
  return (
    <Card className="card-content bg-white" id="info-card">
      <h3>Informações</h3>

      <Card className="card-info bg-blue">
        <span>De</span>
        <span>Jõao Augusto</span>
      </Card>

      <Card className="card-info bg-blue">
        <span>Contra</span>
        <span>Correios</span>
      </Card>

      <Card className="card-info bg-blue date">
        Data de início
        <strong>15 de nov de 2021</strong>
      </Card>

      <img src={Illustration} alt="" />
    </Card>
  );
}

export default InfoCard;

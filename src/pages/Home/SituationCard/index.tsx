import React from "react";

// Components
import Card from "~/components/Card";

// Icons
import Icon from "~/resources/icons/situation-icon.svg";
import Alert from "~/resources/icons/alert-circle.svg";

import "./styles.scss";

function SituationCard() {
  return (
    <Card className="card-content bg-white" id="situation-card">
      <div className="d-flex align-items-center justify-content-between">
        <h3>Situação atual do seu processo</h3>
        <img src={Icon} alt="" />
      </div>

      <div className="situation-info d-lg-flex d-block align-items-center justify-content-between">
        <div>
          <p className="font-weight-bold">O seu processo está assim:</p>
          <p className="data">08/06/2020</p>
          <p>
            Seu processo “transitou em julgado”, que é quando a última decisão é
            tomada e ninguém se opõe. Daí, o processo acaba e é “baixado”.
          </p>
        </div>

        <Card className="card-content bg-dark-blue">
          <p className="mb-0">O que fazer</p>
          <p className="mb-0">Nada a fazer.</p>

          <img src={Alert} alt="" />
        </Card>
      </div>
    </Card>
  );
}

export default SituationCard;

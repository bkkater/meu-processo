import React from "react";

// Components
import Card from "~/components/Card";
import HorizontalBar from "~/components/UI/Chart/HorizontalBar/Apex";

import "./styles.scss";

function DataCard() {
  const mockedDate = [
    {
      value: 955,
      label: "Audiências realizadas",
    },
    {
      value: "48%",
      label: "Sentença tipo A",
    },
    {
      value: "6%",
      label: "Sentenças tipo B",
    },
    {
      value: "46%",
      label: "Sentença tipo C",
    },
  ];

  return (
    <Card className="card-content bg-white" id="data-card">
      <h3 className="mb-4">
        Dados sobre o <strong>TRF5</strong>
      </h3>

      <p>
        No ano de 2020 o TRF5 realizou 955 Audiências, sendo 48% classificadas
        como <strong>Tipo A</strong> (todos os pedidos realizados foram aceitos
        ou parte deles), 6% classificados como <strong>Tipo B </strong>
        (sentenças com análise do pedido e que tratem sobre assuntos já
        julgados) e 46% classificados como <strong>Tipo C</strong> (sentenças
        que analisam processos com alguma falha processual grave que impedem a
        sua análise).
      </p>

      <div className="d-lg-flex ">
        <div className="data-info">
          {mockedDate.map((item) => (
            <Card className="card-regular bg-blue">
              <strong>{item.value}</strong>
              {item.label}
            </Card>
          ))}
        </div>
        <div className="flex-fill">
          <HorizontalBar />
        </div>
      </div>
    </Card>
  );
}

export default DataCard;

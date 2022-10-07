import React from "react";

// Components
import Card from "~/components/Card";
import RadialBar from "~/components/UI/Chart/RadialBar";

import "./styles.scss";

function StageCard() {
  const mockedInfo = [
    {
      name: "Abertura do Processo",
      date: "15 de nov de 2021",
    },
    {
      name: "Aguardando Julgamento",
      date: "20 de dez de 2021",
    },
    {
      name: "Julgamento agendado",
      date: "15 de fev de 2022",
    },
    {
      name: "Finalização",
      date: "25 de mai de 2022",
    },
    {
      name: "Notificação do Fim 1",
      date: "03 de jun de 2022",
    },
    {
      name: "Notificação do Fim 2",
      date: "10 de jun de 2022",
    },
    {
      name: "Fim",
      date: "12 de jun de 2022",
    },
  ];

  const mockedDate = [
    {
      value: 209,
      label: "Dias",
    },
    {
      value: 51,
      label: "Etapas",
    },
    {
      value: 12,
      label: "Etapas principais",
    },
    {
      value: 2,
      label: "Participantes",
    },
  ];

  return (
    <Card className="card-content bg-white d-lg-block d-none" id="stage-card">
      <h3 className="mb-4">Etapas</h3>
      <p className="mb-2">O progresso do processo</p>
      <h5>Todas as etapas concluídas</h5>

      <div className="chart">
        <RadialBar />
      </div>

      <div className="d-flex stage-info mt-5">
        <div>
          {mockedDate.map((item) => (
            <Card className="card-regular bg-blue">
              <strong>{item.value}</strong>
              {item.label}
            </Card>
          ))}
        </div>

        <Card className="card-info bg-blue flex-fill">
          {mockedInfo.map((item) => (
            <div className="d-flex justify-content-between align-items-center">
              {item.name}
              <hr className="flex-fill mx-3" />
              {item.date}
            </div>
          ))}
        </Card>
      </div>
    </Card>
  );
}

export default StageCard;

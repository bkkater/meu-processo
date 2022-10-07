import React from "react";

// Components
import Card from "~/components/Card";
import Input from "~/components/UI/Input";
import Button from "~/components/UI/Button";

import "./styles.scss";

function TermsCard() {
  const mockedTerms = [
    {
      title: "Acórdão",
      description: "A decisão do recurso que foi dada pelos juízes.",
    },
    {
      title: "Agravo",
      description:
        "Um dos tipos de recurso contra uma decisão. A pessoa que faz um Agravo é chamada de Agravante.",
    },
    {
      title: "Ato ordinatório",
      description:
        "São ordens do juiz para atos mais simples para que o processo continue caminhando.",
    },
  ];

  return (
    <Card className="card-content bg-dark-blue" id="terms-card">
      <div>
        <h3>Termos que aparecem no seu processo</h3>
        <p>Um pouco menos de juridiquês pra você</p>

        <div className="d-lg-flex d-block justify-content-between">
          <div className="terms-info">
            <Input placeholder="Digite aqui" id="search-terms" />
            <Button label="Pesquisar" className="btn-default" />
          </div>

          <div className="terms-alphabet d-lg-flex">
            {mockedTerms.map((item) => (
              <Card className="card-info bg-blue">
                <span>{item.title}</span>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TermsCard;

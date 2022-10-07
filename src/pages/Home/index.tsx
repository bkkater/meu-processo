/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

// Components
import Page from "~/components/Page";
import Card from "~/components/Card";

// Services
import api from "~/services/api";

// Partials
import SituationCard from "./SituationCard";
import StageCard from "./StageCard";
import InfoCard from "./InfoCard";
import TermsCard from "./TermsCard";

// Icons
import logo from "~/resources/icons/logo_small.png";

import "./styles.scss";

function Home() {
  useEffect(() => {}, []);
  // const request = async (processo_number: string, cpf_user: string) => {
  //   const response = await api.get(`processo/${processo_number}/${cpf_user}`);
  //   return response.data;
  // };

  return (
    <Page className="home">
      <div className="d-xl-flex flex-row w-100">
        <nav>
          <img src={logo} alt="Meu Processo" width="193px" height="108px" />

          <div className="d-xl-flex d-none flex-column align-items-center">
            <a className="sectionLink" href="#situation-card">
              Situação
            </a>
            <a className="sectionLink" href="#stage-card">
              Etapas
            </a>
            <a className="sectionLink" href="#info-card">
              Informações
            </a>
            <a className="sectionLink" href="#info-card">
              Instituição
            </a>
            <a className="sectionLink" href="#terms-card">
              Dicionário
            </a>
            <a href="https://www5.trf5.jus.br/cp/">Ver na integra</a>
          </div>
        </nav>

        <div className="home-content">
          <Card className="card-container p-3 mb-3">
            <p className="m-0">Você está visualizando o processo número</p>
            <h3 className="m-0">0811795-47.2019.4.05.8400</h3>
          </Card>
          {/* <ProcessCard /> */}

          <Card className="card-home">
            <SituationCard />
            <StageCard />

            <div className="d-lg-flex d-block mt-4">
              <div className="process-location">
                <h2>
                  O seu processo está no <strong>TRF5</strong>
                </h2>

                <p>
                  Seu processo está caminhando no TRF5 porque um dos
                  participantes é o Poder Público Federal, melhor dizendo, a
                  União Federal (ou algum sujeito vinculado a ela). Também é
                  importante falar que o TRF é um Tribunal, ou seja, uma segunda
                  instância, e isso indica que possivelmente seu processo não
                  iniciou no TRF5. Se quiser entender melhor, veja os termos
                  abaixo.
                </p>
              </div>

              <InfoCard />
            </div>

            <TermsCard />
          </Card>
        </div>
      </div>
    </Page>
  );
}

export default Home;

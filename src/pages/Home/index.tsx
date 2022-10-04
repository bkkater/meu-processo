/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

// Components
import BlueCard from "~/components/BlueCard";
import ProcessCard from "~/components/ProcessCard";
import SituationCard from "~/components/SituationCard";
import BordelessCard from "~/components/BordelessCard";
import InformationCard from "~/components/InformationCard";
import StageCard from "~/components/StageCard";
import Page from "~/components/Page";

// Services
import api from "~/services/api";

// Icons
import logo from "~/resources/icons/logo.svg";

import "./styles.scss";
import Card from "~/components/Card";

function Home() {
  // const request = async (processo_number: string, cpf_user: string) => {
  //   const response = await api.get(`processo/${processo_number}/${cpf_user}`);
  //   return response.data;
  // };

  return (
    <Page>
      <div className="d-md-flex flex-row container-lg">
        <nav>
          <img src={logo} alt="Meu Processo" width="193px" height="108px" />

          <ul className="d-md-block d-none">
            <li>
              <button className="sectionLink">Situção</button>
            </li>
            <li>
              <button className="sectionLink">Etapas</button>
            </li>
            <li>
              <button className="sectionLink">Informações</button>
            </li>
            <li>
              <button className="sectionLink">Instituição</button>
            </li>
            <li>
              <button className="sectionLink">Dicionário</button>
            </li>
            <li>
              <button className="integraDetails">Ver na integra</button>
            </li>
          </ul>
        </nav>

        <div>
          <Card className="p-3 bg-transparent">
            <p className="m-0">Você está visualizando o processo número</p>
            <h3 className="m-0">0811795-47.2019.4.05.8400</h3>
          </Card>
          {/* <ProcessCard /> */}

          <div className="content-container">
            <SituationCard />

            <div className="responsive-StageCard">
              <StageCard />
            </div>

            <div className="responsiveDiv">
              <BordelessCard />

              <InformationCard />
            </div>

            <BlueCard />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;

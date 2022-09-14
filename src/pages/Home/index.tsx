/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

// Components
import BlueCard from "~/components/BlueCard";
import ProcessCard from "~/components/ProcessCard";
import SituationCard from "~/components/SituationCard";
import BordelessCard from "~/components/BordelessCard";
import InformationCard from "~/components/InformationCard";
import ContentHeader from "~/components/ContentHeader";
import StageCard from "~/components/StageCard";
import Page from "~/components/Page";

// Services
import api from "~/services/api";

// Icons
import logo from "~/resources/icons/logo.svg";

import "./styles.css";

function Home() {
  function handleScrollToDiv1() {
    const div1 = document.getElementById("div1");
    $("html, body").animate({ scrollTop: div1?.offsetTop }, "slow");
  }

  function handleScrollToDiv2() {
    const div2 = document.getElementById("div2");
    $("html, body").animate({ scrollTop: div2?.offsetTop }, "slow");
  }

  function handleScrollToDiv3() {
    const div3 = document.getElementById("div3");
    $("html, body").animate({ scrollTop: div3?.offsetTop }, "slow");
  }

  function handleScrollToDiv4() {
    const div4 = document.getElementById("div4");
    $("html, body").animate({ scrollTop: div4?.offsetTop }, "slow");
  }

  function handleScrollToDiv5() {
    const div5 = document.getElementById("div5");
    $("html, body").animate({ scrollTop: div5?.offsetTop }, "slow");
  }

  const request = async (processo_number: string, cpf_user: string) => {
    const response = await api.get(`processo/${processo_number}/${cpf_user}`);
    return response.data;
  };

  return (
    <Page>
      <div className="responsive-mainContainer">
        <div className="responsive-mainContainer-left">
          <nav>
            <ul>
              <li>
                <img
                  src={logo}
                  alt="Meu Processo"
                  width="193px"
                  height="108px"
                />
              </li>
              <li>
                <button className="sectionLink" onClick={handleScrollToDiv1}>
                  Situção
                </button>
              </li>
              <li>
                <button className="sectionLink" onClick={handleScrollToDiv2}>
                  Etapas
                </button>
              </li>
              <li>
                <button className="sectionLink" onClick={handleScrollToDiv3}>
                  Informações
                </button>
              </li>
              <li>
                <button className="sectionLink" onClick={handleScrollToDiv4}>
                  Instituição
                </button>
              </li>
              <li>
                <button className="sectionLink" onClick={handleScrollToDiv5}>
                  Dicionário
                </button>
              </li>
              <li>
                <button className="integraDetails">Ver na integra</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="responsive-mainContainer-right">
          <ContentHeader searchProcess={true} />

          <ProcessCard />

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

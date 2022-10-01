import React from "react";

import "./styles.css";

import search from "~/resources/icons/search.svg";
import arrowRight from "~/resources/icons/arrow-right.svg";

import SearchButton from "../SearchButton";
import TermCard from "../TermCard";

function BlueCard() {
  return (
    <div className="blueCard-container" id="div5">
      <h2 className="titleText">Termos que aparecem no seu processo</h2>

      <p className="termsDescription">Um pouco menos de juridiquês pra você</p>

      <div className="responsiveSearch-container">
        <div className="responsive-search">
          <div className="inputSearch">
            <img src={search} alt="Pesquisar" />
            <input placeholder="Digite aqui"></input>
          </div>

          <div className="searchButtonContainer">
            <SearchButton name="Pesquisar" />
          </div>
        </div>

        <div className="inutilContainer">
          <div className="letter-filter">
            <h3>A</h3>
            <img src={arrowRight} alt="Proxima letra" />
          </div>

          <div className="termCardScroll">
            <TermCard
              title="Acórdão"
              description="A decisão do recurso que foi dada pelos juízes."
            />
            <TermCard
              title="Agravo"
              description="Um dos tipos de recurso contra uma decisão. A pessoa que faz um Agravo é chamada de Agravante."
            />
            <TermCard
              title="Ato ordinatório"
              description="São ordens do juiz para atos mais simples para que o processo continue caminhando."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueCard;

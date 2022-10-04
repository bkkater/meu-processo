/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";

// Components
import Input from "~/components/UI/Input";
import Page from "~/components/Page";
import Card from "~/components/Card";
import Button from "~/components/UI/Button";

// Icons
import LogoMeuProcesso from "~/resources/icons/logo.svg";

function Landing() {
  const history = useHistory();

  const onSubmit = () => {
    history.push("confirmar-resultado");
  };

  return (
    <Page>
      <img src={LogoMeuProcesso} alt="Meu Processo" className="mb-5" />

      <Card className="card-container">
        <form className="d-flex flex-column">
          <Input label="Número do processo" id="number-process" />
          <Input label="O seu CPF" id="cpf" />

          <Button type="submit" label="Prosseguir" onClick={onSubmit} />
        </form>
      </Card>
    </Page>
  );
}

export default Landing;

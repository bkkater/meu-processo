/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link, useHistory } from "react-router-dom";

// Components
import Input from "~/components/UI/Input";
import Page from "~/components/Page";
import Card from "~/components/Card";
import Button from "~/components/UI/Button";

// Context
import { useAuth } from "~/contexts";

// Icons
import LogoMeuProcesso from "~/resources/icons/logo.svg";

import "./styles.scss";

function Landing() {
  const history = useHistory();

  const onSubmit = () => {
    history.push("confirmar-resultado");
  };

  return (
    <Page>
      <img src={LogoMeuProcesso} alt="Meu Processo" className="mb-3" />

      <Card>
        <form onSubmit={onSubmit}>
          <Input label="Número do processo" id="number-process" />
          <Input label="O seu CPF" id="cpf" />

          <Button type="submit" className="button-submit" label="Prosseguir" />
        </form>
      </Card>
    </Page>
  );
}

export default Landing;

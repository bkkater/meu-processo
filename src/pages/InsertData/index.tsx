/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

// Context
import { useAuth } from "~/contexts";

// Components
import Input from "~/components/UI/Input";
import Page from "~/components/Page";
import Card from "~/components/Card";
import Button from "~/components/UI/Button";

// Icons
import LogoMeuProcesso from "~/resources/icons/logo_small.png";

import "./styles.scss";

function InsertData() {
  const { setNumProcesso, setCpfUser } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setCpfUser(e.target.elements.cpf.value);
      setNumProcesso(e.target.elements.processNumber.value);

      history.push("confirmar-resultado");
    },
    [history, setCpfUser, setNumProcesso]
  );

  return (
    <Page className="insert-data">
      <img src={LogoMeuProcesso} alt="Meu Processo" className="mb-5" />

      <Card className="card-container">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Input
            name="processNumber"
            label="Número do processo"
            id="number-process"
          />

          <Input label="O seu CPF" id="cpf" name="cpfNumber" />

          <Button type="submit" label="Prosseguir" className="btn-default" />
        </form>
      </Card>
    </Page>
  );
}

export default InsertData;

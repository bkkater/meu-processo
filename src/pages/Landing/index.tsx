/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// Components
import ContentHeader from "~/components/ContentHeader";
import SearchButton from "~/components/SearchButton";
import Page from "~/components/Page";

// Context
import { useAuth } from "~/contexts";

import "./styles.scss";

function ConfrimResult() {
  const { setNumProcesso, setCpfUser } = useAuth();
  return (
    <Page>
      <div className="processNumber-container dif">
        <form>
          <div className="field">
            <label>Número do processo</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>O seu CPF</label>
            <input type="text" />
          </div>
        </form>

        <div className="next-page">
          <button type="submit" className="button-submit">
            <Link to="/ConfirmResult" className="">
              <SearchButton name="Prosseguir" />
            </Link>
          </button>
        </div>
      </div>
    </Page>
  );
}

export default ConfrimResult;

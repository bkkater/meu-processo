import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "~/pages/Home";
import InsertData from "~/pages/InsertData";
import ConfirmResult from "~/pages/ConfirmResult";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/inserir-dados" component={InsertData} />
      <Route path="/confirmar-resultado" component={ConfirmResult} />
    </BrowserRouter>
  );
}

export default Routes;

import React from "react";

// Components
import ContentHeader from "../../components/ContentHeader";
import ConfirmResultCard from "../../components/ConfirmResultCard";
import Page from "~/components/Page";

import "./styles.css";

function ConfirmResult() {
  return (
    <Page>
      <ContentHeader searchProcess={false} />
      <ConfirmResultCard />
    </Page>
  );
}

export default ConfirmResult;

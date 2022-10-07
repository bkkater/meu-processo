import React from "react";

// Components
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import Button from "../UI/Button";

// Styles
import "./styles.scss";

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children }) => {
  const classList = ["page-content"];

  if (className) {
    classList.push(className);
  }
  const handleNavigateToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <div className="page d-flex flex-column justify-content-between min-vh-100">
      <NavBar />

      <div className={classList.join(" ")}>
        <a
          href="https://www.gov.br/acessoainformacao/pt-br"
          className="btn-help"
        >
          Ajuda
        </a>
        {children}

        <Button
          className="btn-backToTop"
          onClick={handleNavigateToTop}
          label=" Voltar ao topo"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

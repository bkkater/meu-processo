import React from "react";

// Components
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

// Styles
import "./styles.scss";

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ className, children }) => {
  const classList = [
    "page d-flex flex-column justify-content-between min-vh-100",
  ];

  if (className) {
    classList.push(className);
  }
  const handleNavigateToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <div className={classList.join(" ")}>
      <NavBar />

      <div className="page-content">
        <a
          href="https://www.gov.br/acessoainformacao/pt-br"
          className="btn-help"
        >
          Ajuda
        </a>
        {children}

        <button className="btn-backToTop" onClick={handleNavigateToTop}>
          Voltar ao topo
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

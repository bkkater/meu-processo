import React from "react";

// Components
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

// Styles
import "./styles.scss";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="page d-flex flex-column justify-content-between min-vh-100">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;

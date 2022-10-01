import React from "react";

import "./styles.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classList = ["card"];

  if (className) {
    classList.push(className);
  }

  return <div className={classList.join(" ")}>{children}</div>;
};

export default Card;

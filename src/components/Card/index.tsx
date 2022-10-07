import React from "react";

import "./styles.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [rest: string]: any;
}

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  const classList = ["card"];

  if (className) {
    classList.push(className);
  }

  return (
    <div className={classList.join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Card;

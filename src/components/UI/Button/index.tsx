import React from "react";

import "./styles.scss";

interface ButtonProps {
  label?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  [rest: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  ...rest
}) => {
  const classList = ["button"];

  if (className) {
    classList.push(className);
  }

  return (
    <button className={classList.join(" ")} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;

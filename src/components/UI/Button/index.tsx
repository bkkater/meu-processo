import React from "react";

import "./styles.scss";

interface InputProps {
  label?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({
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

export default Input;

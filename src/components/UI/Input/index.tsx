import React from "react";

import "./styles.scss";

interface InputProps {
  label?: string;
  id: string;
  [rest: string]: any;
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor="">{label}</label>}
      <input type="text" id={id} {...rest} />
    </div>
  );
};

export default Input;

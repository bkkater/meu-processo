import React from 'react';

import './styles.css';

interface ProcessFieldProps {
  fromSomebody: boolean;
  name: string;
}

const ProcessField: React.FC<ProcessFieldProps> = ({ fromSomebody, name }) => {
  if (fromSomebody) {
    return (
      <div className='blue-field'>
        <h4>De</h4>
        <h3>{name}</h3>
      </div>
    );
  }
  return (
    <div className='blue-field dif'>
      <h4>Contra</h4>
      <h3>{name}</h3>
    </div>
  );
}

export default ProcessField;
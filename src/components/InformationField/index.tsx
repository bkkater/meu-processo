import React from 'react';

import './styles.css';

interface InformationFieldProps {
  fromSomebody: boolean;
  name: string;
}

const InformationField: React.FC<InformationFieldProps> = ({ fromSomebody, name }) => {
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

export default InformationField;
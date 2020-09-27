import React from 'react';

import './styles.css';

interface TermCardProps {
    title: string;
    description: string;
}

const TermCard: React.FC<TermCardProps> = ({title, description}) => {
    return (
        <div className='termCard-container'>
            <h4>{title}</h4>
            <p className='termDescription'>{description}</p>
        </div>
    );
}

export default TermCard;
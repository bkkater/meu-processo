import React from 'react';

import './styles.css';

interface LocalCardProps{
    isDisponible: boolean;
    name: string;
}

const LocalCard: React.FC<LocalCardProps> = ({ isDisponible, name }) => {
    if (isDisponible) {
        return (
            <div className='TRF-local-container'>
                <h2>{name}</h2>
            </div>
        );
    };

    return (
        <div className='TRF-local-container indisponible'>
                <h2>{name}</h2>
                <p>não disponível</p>
        </div>
    );
}

export default LocalCard;
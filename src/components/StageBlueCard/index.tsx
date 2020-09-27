import React from 'react';

import './styles.css';

interface StateBlueCardProps {
    name: string;
    content: string;
}

const StateBlueCard: React.FC<StateBlueCardProps> = ({ name, content }) => {
    return (
        <div className='stageContentCard-container'>
            <h3 className="stageCard-content">{content}</h3>
            <h4 className="stageCard-name">{name}</h4>         
        </div>
    );
}

export default StateBlueCard;
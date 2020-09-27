import React from 'react';

import './styles.css';

interface InformationContentCardProps {
    name: string;
    content: string;
}

const InformationContentCard: React.FC<InformationContentCardProps> = ({ name, children, content }) => {
    return (
        <div className='informationContentCard-container'>
            <div className="field-header">
                <h4 className="field-name">{name}</h4>
                <div className='children-icon'>
                    {children}
                </div>
            </div>

            <h3 className="field-content">{content}</h3>
        </div>
    );
}

export default InformationContentCard;
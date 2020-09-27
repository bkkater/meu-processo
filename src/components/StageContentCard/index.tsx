import React from 'react';

import './styles.css';

function StageContentCard() {
    return (
        <div className='stageCard-section'>
            <div className="stageCardScroll">
                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Fim</h3>
                    <hr />
                    <h3 className="stageCard-section-date">8 de jun de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Notificação do Fim 2</h3>
                    <hr />
                    <h3 className="stageCard-section-date">3 de jun de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Notificação do Fim 2</h3>
                    <hr />
                    <h3 className="stageCard-section-date">3 de jun de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Finalização</h3>
                    <hr />
                    <h3 className="stageCard-section-date">25 de mai de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Julgamento agendado</h3>
                    <hr />
                    <h3 className="stageCard-section-date">15 de fev de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Aguardando julgamento</h3>
                    <hr />
                    <h3 className="stageCard-section-date">20 de dez de 2020</h3>
                </div>

                <div className='stageCard-section-content'>
                    <h3 className='stageCard-section-name'>Abertura do processo</h3>
                    <hr />
                    <h3 className="stageCard-section-date">15 de nov de 2020</h3>
                </div>
            </div>

        </div>
    );
}

export default StageContentCard;
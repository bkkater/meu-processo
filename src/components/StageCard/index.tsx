import React from 'react';
import StateBlueCard from '../StageBlueCard';

import progressBar from '../../assets/icons/bigProgressBar.svg'
import progressStartIcon from '../../assets/icons/progress-start-icon.svg'
import progressEndIcon from '../../assets/icons/progress-end-icon.svg'


import './styles.css'
import StageContentCard from '../StageContentCard';

function StageCard() {
    return (
        <div className='stageCard-container'>
            <h2 className='titleText-inWhite'>Etapas</h2>

            <p className='processDescription'>O progresso do processo</p>
            <h5>Todas as etapas concluidas</h5>

            <img src={progressBar} alt="Barra de progresso" />

            <div className='progress-icons dif'>
                <img src={progressStartIcon} alt="" />
                <img src={progressEndIcon} alt="" />
            </div>

            <div className="stage-bottomContent">
                <section>
                    <StateBlueCard name='Duração em dias' content='97' />
                    <StateBlueCard name='Etapas' content='51' />
                    <StateBlueCard name='Etapas principais' content='12' />
                    <StateBlueCard name='Participantes' content='2' />
                </section>

                <StageContentCard/>
            </div>


        </div>
    );
}

export default StageCard;
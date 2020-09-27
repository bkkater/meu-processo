import React from 'react';

import './styles.css'

import icon from '../../assets/icons/situation-icon.svg'
import progressBar from '../../assets/icons/progress-bar.svg'
import progressStartIcon from '../../assets/icons/progress-end-icon.svg'
import progressEndIcon from '../../assets/icons/progress-start-icon.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'

function SituationCard() {
    return (
        <div className='situationCard-container'>
            <h2 className='titleText-inWhite'>Situação atual do seu processo</h2>
            <img src={icon} alt="" className='situation-icon' />

            <h4 className='processDescription'>O seu processo está assim</h4>
            <p className='data'>08/06/2020</p>
            <p>Seu processo “transitou em julgado”, que é quando a última decisão é tomada e ninguém se opõe.  Daí, o processo acaba e é “baixado”.</p>


            <h4 className='processDescription'>O que fazer</h4>
            <p>Nada a fazer.</p>

            <h4 className='processDescription'>O progresso do processo</h4>
            <h5>TODAS AS ETAPAS CONCLUIDAS</h5>
            <img src={progressBar} alt="Barra de progresso" className='progress-bar' />

            <div className='progress-icons'>
                <img src={progressStartIcon} alt="" />
                <img src={progressEndIcon} alt="" />
            </div>

            <div className="data-details">
                <p>Mostrar movimentação e dados</p>
                <img src={arrowDown} alt=""/>
            </div>



        </div>
    );
}

export default SituationCard;
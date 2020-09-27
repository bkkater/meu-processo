import React from 'react';

import './styles.css'

import icon from '../../assets/icons/situation-icon.svg'

function SituationCard() {
    return (
        <div className='situationCard-container'>
            <h2 className='titleText-inWhite'>Situação atual do seu processo</h2>
            <img src={icon} alt="" className='situation-icon'/>

            <h4 className='processDescription'>O seu processo está assim</h4>
            <p className='data'>08/06/2020</p>
            <p>Seu processo “transitou em julgado”, que é quando a última decisão é tomada e ninguém se opõe.  Daí, o processo acaba e é “baixado”.</p>


            <h4 className='processDescription'>O que fazer</h4>
            <p>Nada a fazer.</p>

            <h4 className='processDescription'>O progresso do processo</h4>


        </div>
    );
}

export default SituationCard;
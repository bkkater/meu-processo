import React from 'react';

import verticalLine from '../../assets/icons/vertical-line.svg'

import './styles.css';

function BordelessCard() {
    return (
        <div className='bordelessCard-content'>
            <img src={verticalLine} alt="" />

            <div className='process-place'>
                <h2>O seu processo está no <strong>TRF5</strong></h2>

                <p>Seu processo está caminhando no TRF5 porque um dos participantes é o Poder Público Federal, melhor dizendo, a União Federal (ou algum sujeito vinculado a ela). Também é importante falar que o TRF é um Tribunal, ou seja, uma segunda instância, e isso indica que possivelmente seu processo não iniciou no TRF5. Se quiser entender melhor, veja os termos abaixo.</p>
            </div>

        </div>
    );
}

export default BordelessCard;
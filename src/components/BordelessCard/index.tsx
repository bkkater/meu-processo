import React from 'react';

import verticalLine from '../../assets/icons/vertical-line.svg'

import './styles.css';

function BordelessCard() {
    return (
        <div className='bordelessCard-content'>
            <img src={verticalLine} alt="" />

            <div className='process-place'>
                <h2>O seu processo está no <strong>TRF5</strong></h2>

                <p>Outra explicação blá blá blá Outra explicação blá blá blá Outra explicação blá blá blá  Outra explicação blá blá blá Outra explicação blá blá blá Outra explicação blá blá blá Outra explicação blá blá blá Outra explicação blá blá blá Outra explicação blá blá blá</p>
            </div>

        </div>
    );
}

export default BordelessCard;
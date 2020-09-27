import React from 'react';

import './styles.css'

import ProcessField from '../ProcessField';

function InformationCard() {
    return (
        <div className='informationCard-container'>
            <h2 className='titleText-inWhite'>Informações</h2>

            <ProcessField fromSomebody={true} name='Camillo Cesário de Lima Neto'/>
            <ProcessField fromSomebody={false} name='Caixa Econômica Federal'/>

        </div>
    );
}

export default InformationCard;
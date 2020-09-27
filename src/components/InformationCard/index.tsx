import React from 'react';

import './styles.css'

import map from '../../assets/icons/map-icon.svg'
import calendar from '../../assets/icons/calendar.svg'

import ProcessField from '../InformationField';
import InformationContentCard from '../InformationContentCard';

function InformationCard() {
    return (
        <div className='informationCard-container'>
            <h2 className='titleText-inWhite'>Informações</h2>

            <ProcessField fromSomebody={true} name='Camillo Cesário de Lima Neto' />
            <ProcessField fromSomebody={false} name='Caixa Econômica Federal' />

            <div className="contentCard-conteiner">
                <InformationContentCard
                    name='Local'
                    content='Natal'
                >
                    <img src={map} alt="Local" />
                </InformationContentCard>

                <InformationContentCard
                    name='Data de início'
                    content='3 de mar de 2020'
                >
                    <img src={calendar} alt="Data de início" />
                </InformationContentCard>
            </div>
            
        </div>
    );
}

export default InformationCard;
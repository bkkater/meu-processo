import React from 'react';

import './styles.css'

import map from '../../assets/icons/map-icon.svg'

import ProcessField from '../InformationField';
import InformationContentCard from '../InformationContentCard';
import { Link } from 'react-router-dom';
import SearchButton from '../SearchButton';

function ConfirmResultCard() {
    return (
        <div className='ConfirmResultCard-container'>
            <h2 className='titleText-inWhite'>Paulo, você esta tentando acessar esse processo?</h2>

            <ProcessField fromSomebody={true} name='Jõao Augusto' />
            <ProcessField fromSomebody={false} name='Correios' />

            <div className="contentCard-conteiner">
                <InformationContentCard
                    name='Local'
                    content='Natal'
                >
                    <img src={map} alt="Local" />
                </InformationContentCard>
            </div>

            <div className="next-page">
                    <Link to='/' className=''><SearchButton name='Prosseguir' /></Link>
            </div>
            
        </div>
    );
}

export default ConfirmResultCard;
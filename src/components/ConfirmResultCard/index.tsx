import React from 'react';

import './styles.css'

import ProcessField from '../InformationField';
import { Link } from 'react-router-dom';
import SearchButton from '../SearchButton';

function ConfirmResultCard() {
    return (
        <div className='ConfirmResultCard-container'>
            <h2 className='titleText-inWhite'>Paulo, você esta tentando acessar esse processo?</h2>

            <ProcessField fromSomebody={true} name='Jõao Augusto' />
            <ProcessField fromSomebody={false} name='Correios' />

            <div className="contentCard-conteiner">
            </div>

            <div className="next-page">
                    <Link to='/Home' className=''><SearchButton name='Prosseguir' /></Link>
            </div>
            
        </div>
    );
}

export default ConfirmResultCard;
import React from 'react';

import './styles.css'

import search from '../../assets/icons/search.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'

import SearchButton from '../SearchButton';
import TermCard from '../TermCard';

function BlueCard() {
    return (
        <div className='blueCard-container'>
            <h2 className='titleText'>Termos que aparecem no seu processo</h2>

            <p className='termsDescription'>Um pouco menos de juridiquês pra você</p>

            <div className='inputSearch'>
                <img src={search} alt="Pesquisar" />
                <input placeholder='Digite aqui'></input>
            </div>

            <div className='searchButtonContainer'>
                <SearchButton />
            </div>

            <div className='letter-filter'>
                <h3>A</h3>
                <img src={arrowRight} alt="Proxima letra" />
            </div>

            <div className='termCardScroll'>
                <TermCard title='Ato ordinatório' description='Pratica de alguma coisa. Ex: informar ou realizar ato...' />
                <TermCard title='Acórdão' description='Decisão parecida com uma sentença realizada por des...' />
                <TermCard title='Agravo' description='O meio que o cidadão...' />
            </div>




        </div>
    );
}

export default BlueCard;
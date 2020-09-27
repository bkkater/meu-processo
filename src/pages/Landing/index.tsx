import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentHeader from '../../components/ContentHeader';
import LocalCard from '../../components/LocalCard';

import border from '../../assets/icons/border.svg'

import './styles.css'
import SearchButton from '../../components/SearchButton';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='container'>
            <Header />

            <ContentHeader searchProcess={false} />

            <h3>Olhar de</h3>

            <div className="LocalCard-content">
                <LocalCard isDisponible={true} name='TRF5' />
                <LocalCard isDisponible={false} name='TRF4' />
                <LocalCard isDisponible={false} name='TRF3' />
                <LocalCard isDisponible={false} name='TRF2' />
                <LocalCard isDisponible={false} name='TRF1' />
            </div>

            <div className="processNumber-container">
                <div className="field">
                    <label>Número do processo</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>O seu CPF</label>
                    <input type="text" />
                </div>

                <div className="next-page">
                    <Link to='/' className=''><SearchButton name='Prosseguir' /></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
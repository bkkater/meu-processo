import React from 'react';

import BlueCard from '../../components/BlueCard';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ProcessCard from '../../components/ProcessCard';

import logo from '../../assets/icons/logo.svg'

import './styles.css'
import Footer from '../../components/Footer';
import SituationCard from '../../components/SituationCard';
import BordelessCard from '../../components/BordelessCard';

function Landing() {
    return (
        <div className='container'>
            <Header />

            <div className='content-header'>
                <img src={logo} alt="Meu Processo"/>
                <Button />
            </div>

            <ProcessCard />

            <div className='content-container'>
                <SituationCard/>

                <BlueCard/>

                <BordelessCard/>
            </div>

            <Footer/>
        </div>
    );
}

export default Landing;
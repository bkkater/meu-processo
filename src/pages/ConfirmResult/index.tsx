import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentHeader from '../../components/ContentHeader';

import './styles.css'
import SearchButton from '../../components/SearchButton';
import { Link } from 'react-router-dom';
import ConfirmResultCard from '../../components/ConfirmResultCard';

function Landing() {
    return (
        <div className='container'>
            <Header />

            <ContentHeader searchProcess={false} />

            <ConfirmResultCard/>

            <div className="processNumber-container">



                <div className="next-page">
                    <Link to='/' className=''><SearchButton name='Prosseguir' /></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
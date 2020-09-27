import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentHeader from '../../components/ContentHeader';

import './styles.css'
import ConfirmResultCard from '../../components/ConfirmResultCard';

function Landing() {
    return (
        <div className='container'>
            <Header />

            <ContentHeader searchProcess={false} />

            <ConfirmResultCard />

            <Footer />
        </div>
    );
}

export default Landing;
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentHeader from '../../components/ContentHeader';

import './styles.css'
import SearchButton from '../../components/SearchButton';
import { Link } from 'react-router-dom';

function ConfrimResult() {
    function HandleScroll(){
        console.log('alo')
    }

    return (
        <div className='container'>
            {HandleScroll}
            <Header />

            <ContentHeader searchProcess={false} />

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
                    <Link to='/ConfirmResult' className=''><SearchButton name='Prosseguir' /></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ConfrimResult;
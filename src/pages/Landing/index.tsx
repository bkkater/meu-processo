import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import ProcessCard from '../../components/ProcessCard';

import './styles.css'

function Landing() {
    return (
        <div>
            <Header />

            <div className='details-button'>
                <Button />
            </div>

            <ProcessCard/>

        </div>
    );
}

export default Landing;
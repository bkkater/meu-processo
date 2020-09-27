import React from 'react';

import BlueCard from '../../components/BlueCard';
import Header from '../../components/Header';
import ProcessCard from '../../components/ProcessCard';
import Footer from '../../components/Footer';
import SituationCard from '../../components/SituationCard';
import BordelessCard from '../../components/BordelessCard';
import InformationCard from '../../components/InformationCard';
import ContentHeader from '../../components/ContentHeader';
import StageCard from '../../components/StageCard';
import './styles.css'

import logo from '../../assets/icons/logo.svg'

function Home() {
    function handleScrollToDiv1(){
        const div1 = document.getElementById('div1')
        $('html, body').animate({scrollTop: div1?.offsetTop}, 'slow');
    }

    function handleScrollToDiv2(){
        const div2 = document.getElementById('div2')
        $('html, body').animate({scrollTop: div2?.offsetTop}, 'slow');
    }

    function handleScrollToDiv3(){
        const div3 = document.getElementById('div3')
        $('html, body').animate({scrollTop: div3?.offsetTop}, 'slow');
    }

    function handleScrollToDiv4(){
        const div4 = document.getElementById('div4')
        $('html, body').animate({scrollTop: div4?.offsetTop}, 'slow');
    }

    function handleScrollToDiv5(){
        const div5 = document.getElementById('div5')
        $('html, body').animate({scrollTop: div5?.offsetTop}, 'slow');
    }

    return (
        <div className='container'>
            <Header />


            <div className="responsive-mainContainer">
                <div className="responsive-mainContainer-left">
                    <nav>
                        <ul>
                            <li><img src={logo} alt="Meu Processo" width= '193px' height= '108px'/></li>
                            <li><button className='sectionLink' onClick={handleScrollToDiv1}>Situção</button></li>
                            <li><button className='sectionLink' onClick={handleScrollToDiv2}>Etapas</button></li>
                            <li><button className='sectionLink' onClick={handleScrollToDiv3}>Informações</button></li>
                            <li><button className='sectionLink' onClick={handleScrollToDiv4}>Instituição</button></li>
                            <li><button className='sectionLink' onClick={handleScrollToDiv5}>Dicionário</button></li>
                            <li><button className='integraDetails'>Ver na integra</button></li>

                        </ul>
                    </nav>
                </div>

                <div className="responsive-mainContainer-right">
                    <ContentHeader searchProcess={true} />

                    <ProcessCard />

                    <div className='content-container'>
                        <SituationCard />

                        <div className="responsive-StageCard">
                            <StageCard />
                        </div>

                        <div className="responsiveDiv">
                            <BordelessCard />

                            <InformationCard />
                        </div>

                        <BlueCard />


                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
import React from 'react';

import Button from '../../components/Button'

import './styles.css';

import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom';

interface ContentHeaderProps {
    searchProcess: boolean;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ searchProcess }) => {
    if (searchProcess) {
        return (
            <div className='content-header-container'>
                <div className="link-container">
                    <Link to="/Landing" className='link'>Voltar para pesquisa</Link>
                    <a href="https://www.gov.br/acessoainformacao/pt-br" className='link'>Ajuda</a>
                </div>
                <div className='content-header'>
                    <img src={logo} alt="Meu Processo" />
                    <Button />
                </div>
            </div>
        );
    }
    return (
        <div className='content-header-container'>
        <div className="link-container">
            <a href="https://www.gov.br/acessoainformacao/pt-br" className='link'>Ajuda</a>
        </div>
        <div className='content-header dif'>
            <img src={logo} alt="Meu Processo" />
        </div>
    </div>
    );
}

export default ContentHeader;
import React from 'react';

import './styles.css'

import govLogo from '../../assets/icons/gov-logo.svg'
import contrastIcon from '../../assets/icons/contrast.svg'
import librasIcon from '../../assets/icons/libras.svg'

function Header() {
  return (
    <header>
        <a href="https://www.gov.br/pt-br"><img src={govLogo} alt="gov.br"/></a>

        <div className='icons-content'>
            <img src={contrastIcon} alt="auto-contraste" className='icon'/>
            <img src={librasIcon} alt="libras" className='icon'/>
        </div>
    </header>
  );
}

export default Header;
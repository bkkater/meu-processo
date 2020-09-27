import React from 'react';

import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'
import facebook from '../../assets/icons/facebook.svg'
import flickr from '../../assets/icons/flickr.svg'
import footerIcons from '../../assets/icons/footer-icons.svg'



import './styles.css';

function Footer() {

    function handleNavigateToTop(){
        $('html, body').animate({scrollTop:0}, 'slow');
    }

    return (
        <div className='footer-container'>
            <h3 className='goToTop' onClick={handleNavigateToTop}>Voltar ao topo</h3>

            <div className='footer-content'>
                <h2>REDES SOCIAIS</h2>

                <div className='social-media-icons'>
                    <a href="https://twitter.com/govbr"><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.youtube.com/user/CanalPortalBrasil"><img src={youtube} alt="youtube" id='youtube' /></a>
                    <a href="https://www.facebook.com/governodobrasil"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.flickr.com/photos/palaciodoplanalto"><img src={flickr} alt="flickr" /></a>
                </div>

                <img src={footerIcons} alt="" />

                <p className='license'>Todo o conteúdo deste site está publicado sob a licença {"\n"} <strong>Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada.</strong></p>
            </div>
        </div>
    );
}

export default Footer;
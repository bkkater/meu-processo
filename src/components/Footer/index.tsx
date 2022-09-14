import React from "react";

import TwitterImg from "~/assets/icons/twitter.svg";
import YoutubeImg from "~/assets/icons/youtube.svg";
import FacebookImg from "~/assets/icons/facebook.svg";
import FlickrImg from "~/assets/icons/flickr.svg";
import FooterIconsImg from "~/assets/icons/footer-icons.svg";

import "./styles.scss";

function Footer() {
  function handleNavigateToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  return (
    <div className="footer bg-color-dark-blue">
      <button className="back-to-top" onClick={handleNavigateToTop}>
        Voltar ao topo
      </button>

      <div className="container-lg py-3">
        <span>REDES SOCIAIS</span>

        <div>
          <a href="https://twitter.com/govbr">
            <img src={TwitterImg} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/user/CanalPortalBrasil">
            <img src={YoutubeImg} alt="youtube" id="youtube" />
          </a>
          <a href="https://www.facebook.com/governodobrasil">
            <img src={FacebookImg} alt="facebook" />
          </a>
          <a href="https://www.flickr.com/photos/palaciodoplanalto">
            <img src={FlickrImg} alt="flickr" />
          </a>
        </div>

        <img src={FooterIconsImg} alt="" />
      </div>
    </div>
  );
}

export default Footer;

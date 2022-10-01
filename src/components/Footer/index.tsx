import React from "react";

import TwitterImg from "~/resources/icons/twitter.svg";
import YoutubeImg from "~/resources/icons/youtube.svg";
import FacebookImg from "~/resources/icons/facebook.svg";
import FlickrImg from "~/resources/icons/flickr.svg";
import FooterIconsImg from "~/resources/icons/footer-icons.svg";

import "./styles.scss";

function Footer() {
  return (
    <div className="footer bg-color-dark-blue">
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

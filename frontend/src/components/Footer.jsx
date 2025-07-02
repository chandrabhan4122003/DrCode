import React from 'react';

import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div style={{display: 'flex', paddingTop:"4rem"}}>
          <div>
            <h3>About</h3>
            <li>Meet The Team</li>
            <li>Contact Us</li>
          </div>
          <div>
            <h3>Support</h3>
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Refund Policy</li>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: "column-reverse", paddingBottom:"2rem"}}>
          <div style={{display: 'flex', flexDirection: "column", gap:"1rem", alignItems:"center"}}>
            <div><h2>Socials</h2></div>
            <div style={{display: 'flex', gap:"1rem", fontSize:"2rem"}}>
              <FontAwesome icon={faFacebook} />
              <FontAwesome icon={faInstagram} />
              <FontAwesome icon={faX}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
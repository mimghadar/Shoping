import React from 'react';

// Styles
import styles from "./Styles/Footer.module.css"

import whatsapp from "./icons/whatsapp.svg"
import facebook from "./icons/facebook.svg"
import instagram from "./icons/instagram.svg"
import twitter from "./icons/twitter.svg"

const Footer = () => {
  return ( 
    <div className={styles.mainContainer}>
    <div className={styles.container}>

      <div className={styles.navLink}>
      <h3> Help Center </h3>
      <h3> Community </h3>
      <h3> About Us </h3>
      <h3> Costumer Service </h3>
      </div>

      <div className={styles.social}>
        <h4> Stay in Touch </h4>
        <div> 
        <img src={facebook} />
        <img src={whatsapp} />
        <img src={twitter} />
        <img src={instagram} />
        </div>
      </div>
    </div>
    <div className={styles.bottomFooter}>
      <h4> @All right reserved for <span> mim sharifi </span> </h4>
    </div>
    </div>
   );
}
 
export default Footer;
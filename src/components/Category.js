import React from 'react';

import styles from "./Styles/category.module.css"

import jacket from "./icons/hoodie-jacket-icon.svg"
import necklace from "./icons/jewelry-showcase-icon.svg"
import shirt from "./icons/men-t-shirts-icon.svg"
import shoe from "./icons/sports-running-shoes-icon.svg"
import television from "./icons/led-television-icon.svg"

const Category = () => {
  return ( 
    <div className={styles.container}>
      <h2> All Category </h2>
      <div className={styles.allCategory}>
        <div> <img src={jacket} /> </div>
        <div> <img src={necklace} /> </div>
        <div> <img src={shirt} /> </div>
        <div> <img src={shoe} /> </div>
        <div> <img src={television} /> </div>
      </div>
    </div>
   )
}
 
export default Category;

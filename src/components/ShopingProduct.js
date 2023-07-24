import {useContext} from 'react';

// Context
import { apiContext } from "./Context/ApiContext";

// Styles
import styles from "./Styles/ShopingProducts.module.css"
import Product from './Common/Product';
import Category from './Category';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

import image1 from "./Slider/image slider/Samsung.jpg"
import image2 from "./Slider/image slider/Jacket Winter Coats.jpg"
import image3 from "./Slider/image slider/Laptop1.jpg"
import image4 from "./Slider/image slider/tshirt.png"
import image5 from "./Slider/image slider/jewelry.jpg"

const ShopingProduct = () => {

  const product = useContext(apiContext)

  return ( 
    <div className={styles.container}>
        <div className={styles.slider}>
          <Carousel autoPlay interval={3000}
              showThumbs={false}
              stopOnHover={false}
              infiniteLoop showStatus={false}
              showIndicators={true}>

              <img className={styles.sliderImage} src={image1} />
              <img className={styles.sliderImage} src={image2} />
              <img className={styles.sliderImage} src={image3} />
              <img className={styles.sliderImage} src={image4} />
              <img className={styles.sliderImage} src={image5} />
          </Carousel>
        </div>
        <div className={styles.category}>
          <Category />
        </div>
        <div className={styles.mainProducts}>
          <h2> Our Products </h2>
          <div className={styles.products}>
          {product.map( item => <Product key={item.id} data={item} /> )}
          </div>
        </div>
    </div>
   );
}
 
export default ShopingProduct;
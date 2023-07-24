import { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from './Context/CartContext';

// Styles
import styles from "./Styles/Header.module.css"
import shop from "./icons/shop.svg"
import home from "./icons/home.svg"
import person from "./icons/person.svg"


const Header = () => {

  const {state} = useContext(cartContext);

  return ( 
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.links}>
          <Link to='/shop'> <img src={home} /> </Link>
          <Link to='/login'> <img src={person} /> </Link>
        </div>

        <Link className={styles.shop} to='/cart'> <img src={shop}/> <span> {state.itemCounter} </span>  </Link>
      </div>
    </div>
   );
}
 
export default Header;
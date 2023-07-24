import React from 'react';

// Components
import Header from './Header';
import ShopingProduct from './ShopingProduct';
import Footer from './Footer';
import Signup from "./Form/Signup"
import Login from './Form/Login';
// import ImageSlider from './Slider/SliderImage';


// Styles
import styles from "./Styles/Store.module.css"
import ApiProvider from './Context/ApiContext';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Common/ProductDetails';
import ShopCart from './ShopCart';
import CartContextProvider from './Context/CartContext';



// const images = [
//   {id: 1, src:image1},
//   {id: 2, src:image2},
//   {id: 3, src:image3}
// ]

const Store = () => {
  return ( 
    <ApiProvider>
    <CartContextProvider>
      <div className={styles.container}>
      <Header />
      <Routes>
        <Route path='/shop' element={ <ShopingProduct /> }/>
        <Route path='/details' element={ <ProductDetails /> }/>
        <Route path='/details/:id' element={ <ProductDetails /> }/>
        <Route path='/cart' element={ <ShopCart /> }/>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={ <ShopingProduct /> }/>
      </Routes>

      <Footer />
      </div>
      </CartContextProvider>
    </ApiProvider>
   )
}
 
export default Store;

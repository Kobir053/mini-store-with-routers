import React from 'react';
import './cart.css';
import { useGlobalStore } from '../../context/StoreContext';
import AllProducts from '../../components/allProducts/AllProducts';

const Cart: React.FC = () => {

  const {cartProducts} = useGlobalStore();

  return (
    <div className='cart'>
        <AllProducts products={cartProducts} isInCart={true}/>
    </div>
  )
}

export default Cart
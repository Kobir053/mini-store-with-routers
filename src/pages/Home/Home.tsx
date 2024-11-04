import React from 'react';
import './home.css';
import AllProducts from '../../components/allProducts/AllProducts';
import { useGlobalStore } from '../../context/StoreContext';

const Home: React.FC = () => {

  const {products} = useGlobalStore();

  return (
    <div className='home'>
      <h1>Welcome to our store</h1>
      <h2>these are our products:</h2>
      <AllProducts products={products} isInCart={false}/>
    </div>
  )
}

export default Home
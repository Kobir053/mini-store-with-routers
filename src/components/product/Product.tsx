import React from 'react';
import './product.css';
import IProduct from '../../types/ProductModel';

interface ProductProps {
  product: IProduct;
  addToCart: () => void;
  isInCart: boolean;
  btnText: string;
  removeFromCart: () => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart, isInCart, btnText, removeFromCart }) => {
  return (
    <div className='product'>
        <h2>{product.name}</h2>
        <h2>{product.price}$</h2>
        <button onClick={isInCart? removeFromCart: addToCart}>{btnText}</button>
    </div>
  )
}

export default Product
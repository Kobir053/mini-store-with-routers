import React from 'react';
import './product.css';
import IProduct from '../../types/ProductModel';

interface ProductProps {
  product: IProduct;
  addToCart: () => void;
  isInCart: boolean;
}

const Product: React.FC<ProductProps> = ({ product, addToCart, isInCart }) => {
  return (
    <div className='product'>
        <h2>{product.name}</h2>
        <h2>{product.price}$</h2>
        {!isInCart && <button onClick={addToCart}>Add To Cart</button>}
    </div>
  )
}

export default Product
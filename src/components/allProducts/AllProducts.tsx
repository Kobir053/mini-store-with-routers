import React from 'react';
import './allProducts.css';
import { useGlobalStore } from '../../context/StoreContext';
import IProduct from '../../types/ProductModel';
import Product from '../product/Product';

interface AllProductsProps {
  products: IProduct[];
  isInCart: boolean;
}

const AllProducts: React.FC<AllProductsProps> = ({ products, isInCart }) => {

  const {addProductToCart, removeProductFromCart} = useGlobalStore();

  const renderProducts = () => {
    if(products.length == 0) return;
    return products.map((product: IProduct, index: number) => {
      return <Product product={product} addToCart={() => addProductToCart(product)} key={index} isInCart={isInCart} btnText={isInCart? "Remove From Cart": "Add To Cart"} removeFromCart={() => removeProductFromCart(index)}/>
    })
  }

  return (
    <div className='all-products'>
        {renderProducts()}
    </div>
  )
}

export default AllProducts
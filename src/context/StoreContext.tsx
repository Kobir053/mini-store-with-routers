import React, { createContext, ReactNode, useContext, useState } from 'react';
import IProduct from '../types/ProductModel';
import { myProducts } from '../data/data';

interface StoreProviderProps {
    children: ReactNode;
}

interface StoreContextProps {
    products: IProduct[];
    cartProducts: IProduct[];
    setCartProducts: (products: IProduct[]) => void;
    addProductToCart: (product: IProduct) => void;
    removeProductFromCart: (index: number) => void;
}

const StoreContext = createContext<StoreContextProps>({
    products: [],
    cartProducts: [],
    setCartProducts: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {

    const [products, setProducts] = useState<IProduct[]>([...myProducts]);
    const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

    const addProductToCart = (product: IProduct) => {
        setCartProducts((prev) => [...prev, product]);
    }

    const removeProductFromCart = (index: number) => {
        const tempArr = [...cartProducts];
        tempArr.splice(index, 1);
        setCartProducts([...tempArr]);
    }

    return (
        <StoreContext.Provider value={{products, cartProducts, setCartProducts, addProductToCart, removeProductFromCart}}>
            {children}
        </StoreContext.Provider>
    )
}

export const useGlobalStore = () => {
    return useContext(StoreContext);
}

export { StoreContext, StoreProvider };
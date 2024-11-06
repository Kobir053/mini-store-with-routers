import React from 'react';
import './navbar.css';
import {FaShopLock, FaShopify} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}><button><FaShopLock/></button></Link>
        <Link to={'/cart'}><button><FaShopify/></button></Link>
    </div>
  )
}

export default Navbar
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}><button>Home</button></Link>
        <Link to={'/cart'}><button>Cart</button></Link>
    </div>
  )
}

export default Navbar
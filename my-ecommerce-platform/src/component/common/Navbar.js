import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>Logo</Link>
            <Link>Store</Link>
            <Link>New Arrivals</Link>
            <Link>Brands</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>Gifts</Link>
            <Link>Support</Link>
            <Link>News</Link>
            <Link>Cart</Link>
        
        </nav>
    )
    }


export default Navbar;
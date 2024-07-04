import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.jpg';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>Elegant Edge</p>
                <div className='hamburger' onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            
            <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link to='/'>Shop</Link> {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
                    <Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
                    <Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}>
                    <Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
}

export default Navbar;

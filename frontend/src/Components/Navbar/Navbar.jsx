import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.jpg';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>Elegant Edge</p>
            </div>
            
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>Shop {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("mens") }}>Men {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}>Women {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}>Kids {menu === "kids" ? <hr /> : <></>}</li>
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

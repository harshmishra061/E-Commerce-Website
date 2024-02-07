import React, { useState, useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    const [hrtag, sethrtag] = useState("Shop")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{sethrtag("Shop")}}> <Link style={{textDecoration:'none', color : '#626262'}} to="/">Shop</Link>{hrtag === "Shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{sethrtag("Men")}}><Link style={{textDecoration:'none', color : '#626262'}} to="/mens">Men</Link>{hrtag === "Men" ? <hr/> : <></>}</li>
                <li onClick={()=>{sethrtag("Women")}}><Link style={{textDecoration:'none', color : '#626262'}} to="/womens">Women</Link>{hrtag === "Women" ? <hr/> : <></>}</li>
                <li onClick={()=>{sethrtag("Kids")}}><Link style={{textDecoration:'none', color : '#626262'}} to="kids">Kids</Link>{hrtag === "Kids" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt=""/></Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

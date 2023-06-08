import React from 'react';
import Navigation from './Navigation';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import "../CSS/LandingPage.css"
import Cart from './Cart';

function LandingPage() {

    let totalAmount = "0,00";
    let currency = "USD";

    return (
        <div>
            <div className='top-elements-of-landing-page'>
                <div></div>
                <h1>Welcome to Revolut test shop</h1>
                <div className='cart-and-logout-icons'>
                    <div className='cart'>
                        <span className='cart-text'>
                            {totalAmount} &ensp; 
                            {currency} &ensp; 
                            <Cart />
                        </span>
                        <div className='tooltip'>
                            <FaShoppingCart />
                            <span class="tooltiptext">Your cart</span>
                        </div>
                    </div>
                    <div className='logout-icon'>
                        <div className='tooltip'>
                            <IoIosLogIn />
                            <span class="tooltiptext">Login</span>
                        </div>
                    </div>
                
                </div>
            </div>
            <Navigation>
            </Navigation>
        </div>
    )
}

export default LandingPage
import React from 'react';
import Navigation from './Navigation';
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { logIn, logOut } from "../actions/reducersActions"
import "../CSS/LandingPage.css"
import Cart from './Cart';

function LandingPage() {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();

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
                        {
                            state.account.loggedIn ?
                                <div style={{display:"flex", flexFlow:"row wrap", alignItems:"center"}}>
                                    <div className='tooltip'>
                                        <IoIosLogOut onClick={() => { dispatch(logOut()) }} />
                                        <span class="tooltiptext">Logout</span>
                                    </div>
                                    <p style={{ fontSize: "15px"}}>Welcome {state.account.name}</p>
                                </div> :
                                <div className='tooltip'>
                                    <IoIosLogIn onClick={() => { dispatch(logIn()) }} />
                                    <span class="tooltiptext">Login</span>
                                </div>
                        }
                    </div>

                </div>
            </div>
            <Navigation>
            </Navigation>
        </div>
    )
}

export default LandingPage
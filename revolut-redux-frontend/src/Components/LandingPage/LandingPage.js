import React from 'react';
import Navigation from '../Navigation';
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { logOut, setTabAccount, setTabCart } from "../../actions/reducersActions"
import "../../CSS/LandingPage.css"

function LandingPage() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const logoutState = {
        name: "",
        email: "",
        password: "",
        customer_id: "",
        loggedIn: false
    }
    let totalAmount = state.cart.totalAmount;
    let currency = state.cart.currency;

    return (
        <div>
            <div className='top-elements-of-landing-page'>
                <div></div>
                <h1>Welcome to Revolut test shop</h1>
                <div className='cart-and-logout-icons'>
                    <div className='cart'>
                        <span className='cart-text'>
                            Cart total: &ensp;
                            {totalAmount} &ensp;
                            {currency} &ensp;
                        </span>
                        <div className='tooltip'
                            onClick={() => {dispatch(setTabCart())}}
                            >
                            <FaShoppingCart />
                            <span class="tooltiptext">Click to go to cart</span>
                        </div>
                    </div>
                    <div className='logout-icon'>
                        {
                            state.account.loggedIn ?
                                <div style={{ display: "flex", flexFlow: "row wrap", alignItems: "center" }}>
                                    <div className='tooltip'>
                                        <IoIosLogOut onClick={() => { dispatch(logOut(logoutState));}} />
                                        <span class="tooltiptext">Logout</span>
                                    </div>
                                    <p style={{ fontSize: "15px" }}>Welcome {state.account.name}</p>
                                </div> :
                                <div className='tooltip'>
                                    <IoIosLogIn onClick={() => { dispatch(setTabAccount()) }} />
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
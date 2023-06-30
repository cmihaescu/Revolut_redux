import React from "react";
import "../../CSS/LandingPage.css"
import "../../CSS/Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { setTabShop } from "../../actions/reducersActions";
import { Quantifier } from "./Quantifier";

function Cart() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const cart = state.cart
    const { numOfItems, items, totalAmount, currency } = cart

    return (
        <div className="cartPage">
            <div className="cartDetails">
                <p>Your cart:</p>
                <p>{numOfItems} items</p>
                <ul>{items.map((item) => {
                    return <div className="cartItems">
                            <li key={item.id}>{item.name}</li>
                            <Quantifier product={item}/>
                           </div>
                })}</ul>
                <p>Total amount: {totalAmount} {currency}</p>
            </div>
            <div className="cartButtons">
                <div
                    className="navigation-button"
                    onClick={() => dispatch(setTabShop())}
                >
                    Shop some more!
                </div>
                <div
                    className="navigation-button"
                    onClick={() => console.log("implement checkout page")}
                >
                    Go to checkout
                </div>
            </div>
        </div>
    )
}

export default Cart;
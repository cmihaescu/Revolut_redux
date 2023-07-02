import React from "react";
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { Quantifier } from "./Quantifier";
import { Link } from "react-router-dom";

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
                <Link className="navigation-button" to="/shop" >
                    Shop some more!
                </Link>
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
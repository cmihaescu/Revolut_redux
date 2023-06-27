import React from "react";
import "../../CSS/Cart.css"
import {  useSelector } from "react-redux";

function Cart() {
    const state = useSelector((state) => state);
    return (
        <div className="">
            <p>Your cart:</p>
            <p>{state.cart.numOfItems} items</p>
            <ul>{state.cart.items.map((item)=>{
               return <li>{item}</li> 
            })}</ul>
            {/* <button
                onClick={() => { dispatch(addItem()) }}
                className="incrementButton">Add item</button>
            <button
                onClick={() => { dispatch(deleteItem()) }}
                disabled={state.cart.numOfItems > 0 ? false : true}
                className="decrementButton">Remove item</button> */}
        </div>
    )
}

export default Cart;
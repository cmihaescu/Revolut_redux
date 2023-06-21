import React from "react";
import "../CSS/Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/reducersActions"

function Cart() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <p>{state.cart.numOfItems} items</p>
            <button
                onClick={() => { dispatch(addItem()) }}
                className="incrementButton">Add item</button>
            <button
                onClick={() => { dispatch(deleteItem()) }}
                disabled={state.cart.numOfItems > 0 ? false : true}
                className="decrementButton">Remove item</button>
        </div>
    )
}

export default Cart;
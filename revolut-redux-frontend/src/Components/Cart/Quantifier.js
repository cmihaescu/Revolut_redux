import { useSelector } from "react-redux";
import React, { useState } from "react";
import "./Cart.css"

export const Quantifier = (props) => {
    const state = useSelector((state) => state)
    const [quantity, setQuantity] = useState(1)
    const [buttonDisable, setButtonDisable] = useState(false)
    let inputWidth = quantity.toString().length+"rem"
    const {price} = props.product
    const {currency} = state.cart

    return (
        <div>
            <p>{price} {currency}</p>
            <div className="quantifier">
                <button
                    className="plus-minus-button"
                    disabled={buttonDisable}
                    onClick={quantity > 1 ? () => { setQuantity(quantity - 1) } : () => setButtonDisable(true)}>
                    <img style={{ cursor: "pointer" }} src="./icons/icons8-minus-96.png" alt="minus sign"></img>
                </button>
                <input
                    className="quantity-input"
                    style={{width:`${inputWidth}`}}
                    onChange={(e) => {
                        setQuantity(Number(e.target.value));
                        e.target.value > 1 ? setButtonDisable(false) : setButtonDisable(true);
                    }}
                    value={quantity}>
                </input>
                <button
                    className="plus-minus-button"
                    onClick={() => { setButtonDisable(false); setQuantity(quantity + 1) }}>
                    <img style={{ cursor: "pointer" }} src="./icons/icons8-plus-96.png" alt="minus sign"></img>
                </button>
            </div>
        </div>
    )
}
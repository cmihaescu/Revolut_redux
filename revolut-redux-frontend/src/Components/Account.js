import React from "react";
import "../CSS/Account.css"
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../actions/reducersActions";

function Account() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const user = {
        name: "Ion",
        email: "ion@gmail.com"
    }

    console.log("state: ", state)
    return (
        <div className="account-container">
            {
                state.account.loggedIn ?
                    <h1> Welcome {state.account.name}! Your email is {state.account.email}</h1> :
                    <div>
                        <h1>Account Page - under construction - Please log in</h1>
                        <p>Username <input ></input></p>
                        <button
                            onClick={() => { dispatch(logIn(user)) }}
                            style={{ color: "#000" }}> Login</button>
                    </div>
            }
        </div>
    )
}

export default Account
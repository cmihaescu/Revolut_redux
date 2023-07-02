import React from "react";
import "./Account.css"
import { useSelector } from "react-redux";
import {Register, Login, AccountPage} from "./AccountFunctions"

function Account() {
    const state = useSelector((state) => state);
    const registered = state.websiteState.registered
   

    return (
        <div className="account-container">
            {registered
                ?
                <Register />
                :
                state.account.loggedIn
                ?
                <AccountPage />
                :
                <Login />
            }
        </div>
    )
}

export default Account
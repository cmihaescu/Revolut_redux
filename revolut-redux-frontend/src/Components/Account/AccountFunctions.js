import React, { useState } from "react";
import { logIn } from "../../actions/reducersActions";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/reducersActions";
import "../../CSS/Account/Account.css"

const Register = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        customer_id: ""
    });

    return (
        <div>
            <h1>Please register</h1>
            <p>Username </p><input
                onChange={(e) => setUser(user => ({
                    ...user,
                    name: e.target.value
                }))} ></input>
            <p>Email </p><input
                onChange={(e) => setUser(user => ({
                    ...user,
                    email: e.target.value
                }))}></input>
            <p>Password </p><input
                onChange={(e) => setUser(user => ({
                    ...user,
                    password: e.target.value
                }))}
                type="password"></input>
            <div className='tooltip'>
                <button
                    id="registerButton"
                    // disable/enable register button
                    disabled={user.email ? user.password ? user.name ? false : true : true : true}
                    onClick={() => { dispatch(logIn(user)); dispatch(register(false)) }}
                    style={{ width: "100%", color: "#000", display: "block", margin: "10px auto", padding: "10px 15px", backgroundColor: "#2a82d4" }}> Register
                </button>
                {/* show, not show tooltip text */
                    user.email ? user.password ? user.name ?
                        <div></div>
                        : <span class="tooltiptext">Please fill out register details</span>
                        : <span class="tooltiptext">Please fill out register details</span>
                        : <span class="tooltiptext">Please fill out register details</span>
                }
            </div>
            <p>Already have an account? Login <span onClick={() => { dispatch(register(false)) }} style={{ cursor: "pointer", fontWeight: "700" }}>here</span></p>
        </div>
    )
}

const Login = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        customer_id: ""
    });

    return (
        <div>
            <h1>Please log in</h1>
            <p>Email </p><input
                onChange={(e) => setUser(user => ({
                    ...user,
                    email: e.target.value
                }))} ></input>
            <p>Password </p><input
                onChange={(e) => setUser(user => ({
                    ...user,
                    password: e.target.value
                }))}
                type="password"></input>
            <div className='tooltip'>
                <button
                    id="loginButton"
                    disabled={user.email ? user.password ? false : true : true}
                    onClick={() => {
                        dispatch(logIn(user)); setUser(user => ({
                            name: "",
                            email: "",
                            customer_id: ""
                        }))
                    }}
                    style={{ width: "100%", color: "#000", display: "block", margin: "10px auto", padding: "10px 15px", backgroundColor: "#2a82d4" }}> Login
                </button>
                {/* show, not show tooltip text */
                    user.email ? user.password ?
                        <div></div>
                        : <span class="tooltiptext">Please fill out login details</span>
                        : <span class="tooltiptext">Please fill out login details</span>
                }
            </div>
            <p>No account? Register <span onClick={() => { dispatch(register(true)) }} style={{ cursor: "pointer", fontWeight: "700" }}>here</span></p>
        </div>
    )
}

const AccountPage = () => {
    const state = useSelector((state) => state);
    return (
        <div>
            <h1> Welcome {state.account.name}! Your email is {state.account.email} and password is {state.account.password}</h1>
        </div>
    )
}

export { Register, Login, AccountPage }
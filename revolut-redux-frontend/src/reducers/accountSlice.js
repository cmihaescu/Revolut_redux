import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";


const initialState = {
    name: "Cornel",
    email: "",
    password: "",
    loggedIn: false
}

export const accountSlice = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                loggedIn: true
            };
        case LOG_OUT:
            return {
                name: "",
                email: "",
                password: "",
                loggedIn: false
            }
        default:
            return state;
    }
}
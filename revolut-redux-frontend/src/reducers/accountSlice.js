import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";


const initialState = {
    name: "",
    email: "",
    password: "",
    customer_id:"",
    loggedIn: false
}

export const accountSlice = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                customer_id:action.payload.customer_id,
                loggedIn: true
            };
        case LOG_OUT:
            return action.payload
        default:
            return state;
    }
}
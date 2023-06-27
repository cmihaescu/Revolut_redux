import { HOME, ACCOUNT, SHOP, REGISTERED } from "../actionTypes/actionTypes";

const initialState = {
    registered: false,
    displayedPage: "Home",
}

export const websiteStateSlice = (state = initialState, action) => {
    switch (action.type) {
        case HOME:
            return { ...state, displayedPage: "Home" }
        case ACCOUNT:
            return { ...state, displayedPage: "Account" }
        case SHOP:
            return { ...state, displayedPage: "Shop" }
        case REGISTERED:
            return { ...state, registered: action.payload }
        default:
            return state;
    }
}
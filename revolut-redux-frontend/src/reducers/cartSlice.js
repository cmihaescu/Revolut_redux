import { ADD_ITEM, DELETE_ITEM, UPDATE_CURRENCY } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
  items:[],
  totalAmount:0,
  currency:"EUR"
};

export const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
        items:state.items.concat(action.payload.name),
        items:state.items.concat(action.payload),
        totalAmount:Number(state.totalAmount)+Number(action.payload.price)
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
      case UPDATE_CURRENCY:
        return {
          ...state,
          currency:action.payload
        }
    default:
      return state;
  }
};

import { ADD_ITEM, DELETE_ITEM, LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const logIn = (payload) => {
  return {
    type: LOG_IN,
    payload
  }
}

const logOut = () => {
  return {
    type: LOG_OUT
  }
}

export { addItem, deleteItem, logIn, logOut };
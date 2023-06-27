import { ADD_ITEM, DELETE_ITEM, LOG_IN, LOG_OUT, HOME, ACCOUNT, SHOP, REGISTERED, UPDATE_CURRENCY } from "../actionTypes/actionTypes";

    //CART//

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

const updateCurrency = (payload) => {
  return {
    type:UPDATE_CURRENCY,
    payload
  }
}

    //ACCOUNT//

const register = (payload) => {
  return {
    type: REGISTERED,
    payload
  }
}

const logIn = (payload) => {
  return {
    type: LOG_IN,
    payload
  }
}

const logOut = (payload) => {
  return {
    type: LOG_OUT,
    payload
  }
}

    //NAVIGATION//

const setTabHome = () => {
  return {
    type: HOME
  }
}

const setTabAccount = () => {
  return {
    type: ACCOUNT
  }
}

const setTabShop = () => {
  return {
    type: SHOP
  }
}

export { addItem, deleteItem, updateCurrency, register, logIn, logOut, setTabHome, setTabAccount, setTabShop };
import { configureStore } from '@reduxjs/toolkit'
import {cartSlice} from './reducers/cartSlice'
import { accountSlice } from './reducers/accountSlice'

export default configureStore({
  reducer: {
    account: accountSlice,
    cart: cartSlice
  }
})

// fa sa mearga sa iei state-ul de account in account.js din store.js
// am ramas la https://redux.js.org/tutorials/essentials/part-2-app-structure#writing-async-logic-with-thunks
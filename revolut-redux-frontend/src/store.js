import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/cartSlice'
import { accountSlice } from './reducers/accountSlice'
import { websiteStateSlice } from './reducers/websiteStateSlice'

export default configureStore({
  reducer: {
    account: accountSlice,
    cart: cartSlice,
    websiteState: websiteStateSlice
  }
})

// am ramas la https://redux.js.org/tutorials/essentials/part-2-app-structure#writing-async-logic-with-thunks
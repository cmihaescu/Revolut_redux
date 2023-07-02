import './App.css';
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import store from "./redux/store";
import Account from './Components/Account/Account.js';
import { Shop } from './routes/shop/Shop.js';
import Cart from './Components/Cart/Cart'
import Home from './routes/home/Home.js'
import LandingPage from './Components/LandingPage/LandingPage';


function App() {

  return (
    <Provider store={store}>
      <Routes className='navigation'>
        <Route path='/' element={<LandingPage />} className="navigation-button">
          <Route index element={<Home />} className="navigation-button"></Route>
          <Route path='account' element={<Account />} className="navigation-button"></Route>
          <Route path='shop' element={<Shop />} className="navigation-button"></Route>
          <Route path='cart' element={<Cart />} className="navigation-button"></Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

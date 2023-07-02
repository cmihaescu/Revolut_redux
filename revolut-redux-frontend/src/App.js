import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import LandingPage from './Components/LandingPage/LandingPage';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage>
        </LandingPage>
      </div>
    </Provider>
  );
}

export default App;

import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from './Components/LandingPage';

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

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider, createStore} from 'easy-peasy';
import LoginContainer from "./components/Template/Login";
import integration from "./integrations/store";
const store = createStore(integration);
function App() {
  return (
    <StoreProvider store={store}>
      <LoginContainer/>
    </StoreProvider>
  );
}

export default App;

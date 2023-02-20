/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/pages/Home';
import store from './components/store';

function App() {
  return (
    <main>
      <Provider store={store}>
        <Home />
      </Provider>
    </main>
  );
}

export default App;

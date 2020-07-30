import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main';
import NavigationMenu from './components/NavigationMenu';
import { Provider } from 'react-redux';
import store from './store';
import {mytheme} from './styles/AppStyle'



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme = {mytheme}>
              <NavigationMenu />
              <Main />
        </ThemeProvider>
      </Provider>
      
    </div>
  );
}

export default App;

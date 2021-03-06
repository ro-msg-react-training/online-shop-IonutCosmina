import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main';
import NavigationMenu from './components/NavigationMenu';
import { Provider } from 'react-redux';
import {mytheme} from './styles/AppStyle'



function App() {
  return (
    <div className="App">
      
        <ThemeProvider theme = {mytheme}>
              <NavigationMenu />
              <Main />
        </ThemeProvider>
      
    </div>
  );
}

export default App;

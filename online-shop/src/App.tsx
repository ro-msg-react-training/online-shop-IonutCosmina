import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import Main from './components/Main';
import NavigationMenu from './components/NavigationMenu';

const mytheme = createMuiTheme({
   palette: {
     primary:{
       main: "#a01441",
     },
     secondary: {
      main: "#001427",
    },
   },
  
});


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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import ProductListType from './components/ProductList';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router} from 'react-router-dom'
import Main from './components/Main';
import NavigationMenu from './components/NavigationMenu';
//import { createMuiTheme } from '@material-ui/core/styles';

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

const productList = [{ id: 1, name: 'Product Name 1', category: 'Product Category 1', description: 'A short description', price: 150 },
{ id: 2, name: 'Product Name 2', category: 'Product Category 2', description: 'A short description', price: 54.2 },
{ id: 3, name: 'Product Name 3', category: 'Product Category 3', description: 'A short description', price: 75 }];


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

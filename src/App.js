import React from 'react';
import "./App.css"
import Store from './components/Store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return ( 
    <div className="app">
      <BrowserRouter>
      <Store />
      </BrowserRouter>
    </div>
   )
}

export default App;
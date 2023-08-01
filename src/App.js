import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './pages/Home';
import ContractList from './pages/ContractList';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contract' element={<ContractList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
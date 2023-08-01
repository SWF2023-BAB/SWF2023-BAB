import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './pages/Home';
import ContractList from './pages/contract/ContractList';
import ContractDetail from './pages/contract/ContractDetail';
import PresentCompany from './pages/company/PresentCompany';
import NextCompany from './pages/company/NextCompany';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contract' element={<ContractList />}></Route>
        <Route path='/contractdetail' element={<ContractDetail />}></Route>
        <Route path='/presentcompany' element={<PresentCompany/>}></Route>
        <Route path='/nextcompany' element={<NextCompany/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
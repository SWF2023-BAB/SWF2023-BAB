import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import styled from "styled-components";
import "./styles/App.css";

import Home from './pages/Home';

const App = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
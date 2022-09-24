import React from 'react';
import './App.css'
import Home from './components/Header';
import Churrascometro from './components/pages/Churrascometro';
import Contato from './components/pages/Contato';
import Reserve from './components/pages/Reserve';

import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      
         <Route path="/" index element={<Home />}>Home</Route>
         <Route path="/churrascometro" element={<Churrascometro />}>Churrascometro</Route>
         <Route path='/contato' element={<Contato />}>Contato</Route>
         <Route path='/reserve' element={<Reserve />}>Reserva</Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
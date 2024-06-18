
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/home';
import Navbar from './component/nab'; 
import Services from './page/services/services'; 
import Contact from './page/contact/contact';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

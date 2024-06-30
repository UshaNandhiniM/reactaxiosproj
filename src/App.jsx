import React, { useState } from 'react';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Create from './Pages/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Edit from './Pages/Edit';

const App = () => {
    const [id,setId]=useState(0);
    return (
        <div>
        <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home setId={setId} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/edit/:id" element={<Edit id={id}/>}/>
          <Route path="/create" element={<Create/>} />
        </Routes>
        
      </BrowserRouter>
        </div>
    );
};

export default App;
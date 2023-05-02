import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Notfound from './pages/NotFound.js'
import Cart from './pages/Cart';
import Gal from './pages/gal/gal';
import Ak from './pages/tovari/ak';
import Ak_1_1 from './pages/tovari/konkr_tov/ak_1.1';
import Ak_1_2 from './pages/tovari/konkr_tov/ak_1.2';
import El from './pages/tovari/el';
import El_2_1 from './pages/tovari/konkr_tov/el_2.1';
import El_2_2 from './pages/tovari/konkr_tov/el_2.2';
import Register from './pages/register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/gal" element={<Gal/>} />
        <Route path="/catalog/ak" element={<Ak/>} />
        <Route path="/catalog/ak/ak_1.1" element={<Ak_1_1/>} />
        <Route path="/catalog/ak/ak_1.2" element={<Ak_1_2/>} />
        <Route path="/catalog/el" element={<El/>} />
        <Route path="/catalog/el/el_2.1" element={<El_2_1/>} />
        <Route path="/catalog/el/el_2.2" element={<El_2_2/>} />
      </Routes>
    </>
  );
}

export default App;

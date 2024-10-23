import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Home from './components/home';
import SobreNos from './components/sobreNos'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Cadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobreNos" element={<SobreNos />} /> {/* Nova rota */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

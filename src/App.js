import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Cadastro from './components/cadastro';
import Home from './components/home';
import SobreNos from './components/sobreNos'; 
import DowHollow from './components/dowhollow';
import Fobia from './components/fobia';
import Cuphead from './components/cuphead';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<Cadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobreNos" element={<SobreNos />} />
        <Route path="/dowhollow" element={<DowHollow />} />
        <Route path="/fobia" element={<Fobia />} />
        <Route path="/cuphead" element={<Cuphead />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import logo from '../img/logo.png'; 
import '../styles/cadastro.css';

const Cadastro = () => {
  return (
    <div className="cadastro-container">
      <img src={logo} alt="Logo" className="logo" style={{ width: '300px' }} />
      <form className="cadastro-form">
        <h2>Criar Conta</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" className="form-control" id="name" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" className="form-control" id="password" placeholder="" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Criar Conta</button>
      </form>
      <footer className="footer">
        <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
        <p>Contato: contato@suaempresa.com | (11) 1234-5678</p>
      </footer>
    </div>
  );
};

export default Cadastro;

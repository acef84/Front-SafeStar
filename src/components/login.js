import React from 'react';
import logo from '../img/logo.png';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" style={{ width: '300px' }} />
      <form className="login-form">
        <h2>Iniciar Sessão</h2>
        <div className="form-group">
          <label htmlFor="email">Email ou número de celular:</label>
          <input type="email" className="form-control" id="email" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" className="form-control" id="password" placeholder="" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Entrar</button>
        <p className="create-account-link">
          Não tem uma conta? <a href="/criar-conta">Criar Conta</a>
        </p>
      </form>
      <footer className="footer">
        <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
        <p>Contato: contato@suaempresa.com | (11) 1234-5678</p>
      </footer>
    </div>
  );
};

export default Login;

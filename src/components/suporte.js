import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/suporte.css';

const Suporte = () => {
  return (
    <div className="suporte-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobreNos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link>
        </nav>
      </header>
      <div className="content">
        <div className="text-container">
          <h1>Suporte</h1>
          <p>
            Se você tiver alguma dúvida ou precisar de ajuda, entre em contato conosco através do formulário abaixo.
          </p>
          <form className="support-form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="tips-container">
          <h2>Dicas de Solução de Problemas</h2>
          <ul>
            <li>Verifique sua conexão com a internet.</li>
            <li>Certifique-se de que seu navegador está atualizado.</li>
            <li>Limpe o cache e os cookies do seu navegador.</li>
            <li>Reinicie seu dispositivo.</li>
            <li>Se o problema persistir, entre em contato conosco através do formulário acima.</li>
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          © 2024 SafeStar. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Suporte;

import React from 'react';
import logo from '../img/logo.png';
import '../styles/sobreNos.css';

const SobreNos = () => {
  return (
    <div className="sobreNos-container">
      <header className="header">
        <a href="/img/logo,png"><img src={logo} alt="Logo" className="logo" /></a> 
        <nav className="nav-links">
          <a href="/sobreNos">Sobre nós</a>
          <a href="/#nossos-jogos">Jogos</a>
        </nav>
      </header>
      <div className="content">
        <div className="text-container">
            <h1>Um pouco sobre nós:</h1>
          <p>
          Somos uma equipe de cinco estudantes apaixonados por tecnologia, atualmente cursando Informática para Internet no SENAC.
          </p>
          <p>
          Nossa missão é desenvolver um site de jogos, mas também celebre a criatividade e a inovação dos desenvolvedores independentes.Cada membro da nossa equipe traz uma habilidade especial para o projeto, garantindo que nosso site seja um lugar onde os jogadores possam descobrir e se apaixonar por novos títulos.          </p>
          <p>
          Na SafeStar, acreditamos que os jogos independentes têm o poder de proporcionar experiências únicas. Nosso objetivo foi criar uma plataforma onde esses jogos possam alcançar um público apaixonado.
          </p>
          <p>
          Obrigado por visitar a SafeStar! Esperamos que você aproveite nossos jogos.          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          © 2024 SafeStar. Todos os direitos reservados.
        </div>
        <div>Email para contato: SafeStar@gmail.com</div>
      </footer>
    </div>
  );
};

export default SobreNos;

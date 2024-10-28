import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/sobreNos.css';


const SobreNos = () => {
  return (
    <div className="sobreNos-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobreNos">Sobre nós</Link>
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
            Nossa missão é desenvolver um site de jogos, mas também celebrar a criatividade e a inovação dos desenvolvedores independentes. Cada membro da nossa equipe traz uma habilidade especial para o projeto, garantindo que nosso site seja um lugar onde os jogadores possam descobrir e se apaixonar por novos títulos.
          </p>
          <p>
            Na SafeStar, acreditamos que os jogos independentes têm o poder de proporcionar experiências únicas. Nosso objetivo foi criar uma plataforma onde esses jogos possam alcançar um público apaixonado.
          </p>
          <p>
            Obrigado por visitar a SafeStar! Esperamos que você aproveite nossos jogos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;

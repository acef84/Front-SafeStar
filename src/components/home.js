import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import banner from '../img/fundojogos.jpg';
import bemvindo from '../img/bemvindo.png';
import fobia from '../img/fobia.png';
import cuphead from '../img/cuphead.png';
import hollowKnight from '../img/knight.png';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobreNos">Sobre nós</Link>
          <a href="#nossos-jogos">Jogos</a>
          <Link to="/suporte">Suporte</Link> {/* Adicionado */}
        </nav>
      </header>
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner" />
        <img src={bemvindo} alt="Bem-vindo" className="overlay-image" />
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar jogos..." className="search-input" />
          <button type="button" className="search-button" aria-label="Pesquisar jogos">Pesquisar</button>
        </div>
      </div>
      <div className="games-section" id="nossos-jogos">
        <h2 className="games-title">Nossos Jogos:</h2>
        <div className="games-content">
          <div className="game-box">
            <img src={fobia} alt="Fobia" className="game-image" />
            <div className="game-description">
              <p>
                <strong>Fobia - St. Dinfna Hotel</strong> é um jogo de survival horror desenvolvido pelo estúdio brasileiro Pulsatrix Studios. Neste jogo, você assume o papel de Roberto Leite Lopes, um jornalista investigativo que se encontra preso em um hotel assombrado na cidade fictícia de Treze Trilhas, Santa Catarina.
              </p>
              <Link to="/fobia">
                <button className="saiba-mais-button">Saiba Mais</button>
              </Link>
            </div>
          </div>
          <div className="game-box">
            <img src={cuphead} alt="Cuphead" className="game-image" />
            <div className="game-description">
              <p>
                <strong>Cuphead</strong> é um jogo de ação e tiro em estilo retrô, inspirado nos desenhos animados dos anos 1930. Com gráficos desenhados à mão e uma trilha sonora original de jazz, Cuphead oferece uma experiência única e desafiadora.
              </p>
              <Link to="/cuphead">
                <button className="saiba-mais-button">Saiba Mais</button>
              </Link>
            </div>
          </div>
          <div className="game-box">
            <img src={hollowKnight} alt="Hollow Knight" className="game-image" />
            <div className="game-description">
              <p>
                <strong>Hollow Knight</strong> é um jogo de ação e aventura em estilo metroidvania, desenvolvido pela Team Cherry. Explore um vasto mundo interconectado, enfrente inimigos desafiadores e descubra segredos ocultos em Hallownest.
              </p>
              <Link to="/dowhollow">
                <button className="saiba-mais-button">Saiba Mais</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/sobreNos">Sobre nós</Link>
            <Link to="/contato">Contato</Link>
          </div>
          <div className="footer-contact">
            <p>© 2024 SafeStar. Todos os direitos reservados.</p>
            <p>Email para contato: SafeStar@gmail.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

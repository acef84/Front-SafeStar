import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cuphead.css'; // Importa o arquivo CSS combinado


import screenshot1 from '../img/cup3.png';
import screenshot2 from '../img/cup2.png';
import screenshot3 from '../img/cup1.png';

function DownloadButton() {
  return (
    <div className="text-center mt-4">
      <a href="/path/to/game-download.zip" className="btn btn-success btn-lg" download>Baixar Jogo</a>
    </div>
  );
}

function GameDescription() {
  return (
    <div className="container mt-4">
      <h2>Sobre o Jogo</h2>
      <p>Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz.
      Jogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!</p>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Cuphead</h1>
    </header>
  );
}

function Screenshots() {
  const screenshots = [
    { src: screenshot1, alt: 'Screenshot 1' },
    { src: screenshot2, alt: 'Screenshot 2' },
    { src: screenshot3, alt: 'Screenshot 3' },
  ];

  return (
    <div className="container mt-4 screenshots">
      <div className="row">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="col-md-4">
            <img src={screenshot.src} alt={screenshot.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemRequirements() {
  return (
    <div className="container mt-4">
      <h2>Requisitos do Sistema</h2>
      <ul>
        <li>Sistema Operacional: WINDOWS® 7</li>
        <li>Processador: Intel Core2 Duo E8400, 3.0GHz ou AMD Athlon 64 X2 6000+</li>
        <li>Memória: 3 GB de RAM</li>
        <li>Gráficos: Geforce 9600 GT ou AMD HD 3870 512MB</li>
        <li>Armazenamento: 4 GB de espaço disponível</li>
      </ul>
    </div>
  );
}

// Definindo o componente Cuphead
function Cuphead() {
  return (
    <div>
      <Header />
      <GameDescription />
      <Screenshots />
      <SystemRequirements />
      <DownloadButton />
    </div>
  );
}

export default Cuphead;

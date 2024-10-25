import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/fobia.css'

import screenshot1 from '../img/fb5.png';
import screenshot2 from '../img/fb.png';
import screenshot3 from '../img/fb3.png';

function DownloadButton() {
  return (
    <div className="text-center mt-4">
      <a href="/path/to/game-download.zip" className="btn btn-success btn-lg" download>Baixar Jogo</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3 mt-4">
      <div className="">
        <p>© 2024 Safe Star. Todos os direitos reservados.</p>
        <ul className="social-links">
        </ul>
      </div>
    </footer>
  );
}

function GameDescription() {
  return (
    <div className="container mt-4">
      <h2>Sobre o Jogo</h2>
      <p>Treze Trilhas é lar do Hotel Santa Dinfna, palco de diversos boatos, incluindo sumiços misteriosos e atividade paranormal. Em busca de um furo, o jornalista Roberto Leite Lopes viaja até Santa Catarina atrás de uma dica de Stephanie.
      Suas habilidades investigativas o ajudarão a descobrir a verdade e a sobreviver quando encontra uma câmera que revela outras linhas do tempo, uma seita, experimentos com humanos e aparições. Resolva puzzles e procure algo para detê-las, enquanto passado, presente e futuro colidem.</p>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Fobia- St.Dinfna Hotel</h1>
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
        <li>Sistema Operacional: WINDOWS® 7, 8, 8.1, 10, 11</li>
        <li>Processador: Core i5 8600 or AMD Ryzen 5 3600X</li>
        <li>Memória: 8 GB de RAM</li>
        <li>Gráficos: NVIDIA GeForce GTX 1060 6GB</li>
        <li>Armazenamento: 10 GB de espaço disponível</li>
      </ul>
    </div>
  );
}

// Definindo o componente Fobia
function Fobia() {
  return (
    <div>
      <Header />
      <GameDescription />
      <Screenshots />
      <SystemRequirements />
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default Fobia;

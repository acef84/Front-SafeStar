import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/dowhollow.css'; // Importa o arquivo CSS combinado

import screenshot1 from '../img/hk4.png';
import screenshot2 from '../img/hk2.png';
import screenshot3 from '../img/hk1.png';

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
      <p>Enfrente as profundezas de um reino esquecido. Abaixo da cidade moribunda de Dirtmouth jaz um reino antigo e arruinado. Muitos são atraídos para o subterrâneo em busca de riquezas, glórias ou respostas para antigos segredos.
      Hollow Knight é uma aventura de ação clássica em estilo 2D por um vasto mundo interligado. Explore cavernas serpenteantes, cidades antigas e ermos mortais; lute contra criaturas malignas e alie-se a insetos bizarros, e solucione mistérios antigos no centro do reino.
      </p>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Hollow Knight</h1>
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
        <li>Sistema Operacional: WINDOWS® 10</li>
        <li>Processador: Intel Core i5</li>
        <li>Memória: 8 GB de RAM</li>
        <li>Gráficos: GeForce GTX 560</li>
        <li>Armazenamento: 9 GB de espaço disponível</li>
      </ul>
    </div>
  );
}

// Componente principal que agrupa todos os outros
function DowHollow() {
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

export default DowHollow;

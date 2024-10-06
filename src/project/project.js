import React from 'react';
import './project.css'; // Certifique-se de que o arquivo de estilo exista
import gpsImage from './map.png'; // Importe a imagem do GPS

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Como Funciona o Projeto</h1>
      <div className="projects-content">
        <div className="projects-text">
          <p className="projects-description">
            No projeto Mobilidade Acessível, você pode criar sua conta e editar seu perfil de forma
            rápida e simples. Nossa interface foi projetada para ser fácil e intuitiva, permitindo que
            você trace rotas para o seu destino desejado sem complicações.
          </p>
          <p className="projects-description">
            Com nosso sistema, você pode escolher o melhor caminho para se deslocar, levando em conta
            acessibilidade e conforto. Estamos comprometidos em garantir que cada usuário tenha uma
            experiência agradável e eficiente ao navegar pela cidade.
          </p>
          <p className="projects-description">
            Para saber mais e explorar todas as funcionalidades, visite o nosso site oficial: 
            <a href="https://6701bbe8aa1f288ab766a17f--mobilidadeacessivel.netlify.app/" target="_blank" rel="noopener noreferrer"> Mobilidade Acessível</a>.
          </p>
        </div>
        <div className="projects-image">
          <img src={gpsImage} alt="Print do GPS" className="gps-print" />
        </div>
      </div>
    </div>
  );
}

export default Projects;

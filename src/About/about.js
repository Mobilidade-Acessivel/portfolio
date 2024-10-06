import React from 'react';
import './about.css'; // Certifique-se de que o arquivo de estilo exista

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Mobilidade Acessível</h1>
      <p className="about-text">
        O projeto Mobilidade Acessível tem como objetivo principal promover um ambiente mais inclusivo e
        acessível para todas as pessoas, independentemente de suas habilidades físicas. Acreditamos que
        todos têm o direito de se locomover com segurança e dignidade.
      </p>
      <p className="about-text">
        Nosso intuito é conscientizar a sociedade sobre a importância de adaptar espaços públicos e
        privados, implementando soluções que garantam o acesso a todos. Desde calçadas adaptadas até
        transporte público acessível, estamos empenhados em trazer melhorias significativas para a vida
        das pessoas com mobilidade reduzida.
      </p>
      <p className="about-text">
        Junte-se a nós nessa jornada pela mobilidade acessível. Cada passo conta para a construção de um
        mundo mais justo e igualitário. Sinta-se à vontade para explorar nosso site e descobrir como você
        pode contribuir.
      </p>
    </div>
  );
}

export default About;

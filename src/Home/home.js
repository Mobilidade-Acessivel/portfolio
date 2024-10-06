import React from 'react';
import './home.css';
import logo from './assets/favicon.png'; // Importa a imagem do logo

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo do Projeto" className="home-logo" />
      <h1>Bem-vindo ao Projeto Mobilidade Acessível</h1>
      <p>Sinta-se à vontade para explorar e entender como o nosso projeto funciona.</p>
      <p>Nosso objetivo é criar um mundo mais acessível para todos.</p>
      <p>Fique à vontade para navegar pelas páginas e conhecer nossas iniciativas.</p>
    </div>
  );
}

export default Home;

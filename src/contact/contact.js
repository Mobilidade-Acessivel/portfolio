import React from 'react';
import './contact.css'; // Certifique-se de que o arquivo de estilo exista

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contato</h1>
      <div className="contact-content">
        <p className="contact-description">
          Para mais informações e atualizações sobre o projeto, você pode nos seguir nas redes sociais ou acessar nosso GitHub.
        </p>
        <div className="contact-links">
          <a 
            href="https://github.com/Mobilidade-Acessivel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.instagram.com/mobilidade.acessivel/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import statements from '../../utils/statements';

import './styles.css';
import logo from '../../assets/logo.svg';
import girl from '../../assets/girl.png';

export default function About() {
  return (
    <div className="full-content">
      <header>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <span>Leia atentamente sobre essa aplicação.</span>
      </header>

      <h1>Como funciona?</h1>
      <p>{statements.about}</p>

      <h1>Como usar a aplicação?</h1>
      <p>{statements.instructionForUse}</p>

      <h1>Ficou com dúvida de como utilizar a plataforma web? Assista o vídeo.</h1>
      <a style={{color: "#fff"}} href="https://youtu.be/yWO2egpa3Gg" target="_blank" rel="noopener">Clique aqui</a>

      <h1>Instalação da aplicação mobile</h1>
      <p>{statements.instalationGuides}</p>

      <a style={{color: "#fff"}} href="https://drive.google.com/open?id=12VoNY09jhmiFSKzY3xfiY8U_x6j17kD6" target="_blank" rel="noopener">Clique aqui</a>

      <h1>Ficou com dúvida de como funciona o app mobile? Veja aqui:</h1>
      <a style={{color: "#fff"}} href="https://youtu.be/hR353K0JE24" target="_blank" rel="noopener">Clique aqui</a>

      <h1>Privacidade do Usuário</h1>
      <p>{statements.userPrivacy}</p>

      <h1>Avisos contra tentativas de má indole.</h1>
      <p>{statements.userStatements}</p>

      <div className="statements-content">
        <h1>Fique em casa</h1>
        <img src={girl} alt="heroes" />
      </div>

      <footer>
        Desenvolvido por M - © 2020
        <Link to='/home'>Ir para página inicial</Link>
      </footer>
    </div>
  );
}

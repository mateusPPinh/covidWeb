import React from 'react';
import { Link } from 'react-router-dom';
import statements from '../../utils/statements';

import './styles.css';
import logo from '../../assets/logo.svg';

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

      <h1>Privacidade do Usuário</h1>
      <p>{statements.userPrivacy}</p>

      <h1>Avisos contra tentativas de má indole.</h1>
      <p>{statements.userStatements}</p>

      <footer>
        Desenvolvido por Mateus - © 2020
        <Link to='/home'>Ir para página inicial</Link>
      </footer>
    </div>
  );
}

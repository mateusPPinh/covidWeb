import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import statements from '../../utils/statements';

import './styles.css';
import logo from '../../assets/logo.svg';
import girl from '../../assets/girl.png';

import ArrowComponent from '../../components/Arrows';

export default function About() {
  const [showWorks, setShowWorks] = useState(false);
  const [useApp, setUseApp] = useState(false);
  const [how, setHow] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [doubt, setDoubt] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [stataments, setStatements] = useState(false);
  const [open, isOpen] = useState(false);
  
  return (
    <div className="full-content">
      <header>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <span>Leia atentamente sobre essa aplicação.</span>
      </header>

      <section className="section-all" 
      style=
      {{
        width: "100%", 
        margin: "200px auto 0px", 
        display: "block"
      }}>
      <div className="toggle-content">
        <button onClick={() => setShowWorks(!showWorks)} type="button">
        <span>I.</span>
        <strong>Como funciona?</strong>
        <ArrowComponent />
        </button>
        {showWorks && <p>{statements.about}</p>}
      </div>

      <div className="toggle-content">
        <button onClick={() => setUseApp(!useApp)} type="button">
        <span>II.</span>
        <strong>Como usar a aplicação?</strong>
        <ArrowComponent />
        </button>
        {useApp && <p>{statements.instructionForUse}</p>}
      </div>

      <div className="toggle-content">
        <button onClick={() => setHow(!how)} type="button">
        <span>III.</span>
        <strong>Dúvidas de uso na Web? Assista</strong>
        <ArrowComponent />
        </button>
        {how && 
        <p>
          {statements.doubtAboutUse}
          <a 
           target="_blank" 
           rel="noopener" 
           href="https://www.youtube.com/watch?v=yWO2egpa3Gg&feature=youtu.be">
           Clique
          </a>
        </p>}
      </div>

      <div className="toggle-content">
        <button onClick={() => setMobile(!mobile)} type="button">
        <span>IV.</span>
        <strong>Instalação da aplicação mobile</strong>
        <ArrowComponent />
        </button>
        {mobile && 
        <p>
          {statements.instalationGuides}
          <a 
            target="_blank" 
            rel="noopener" 
            href="https://drive.google.com/file/d/12VoNY09jhmiFSKzY3xfiY8U_x6j17kD6/view">
            Clique aqui para baixar
          </a>
        </p>}
      </div>


      <div className="toggle-content">
        <button onClick={() => setDoubt(!doubt)} type="button">
        <span>V.</span>
        <strong>Dúvidas sobre o app? Assista</strong>
        <ArrowComponent />
        </button>
        {doubt && <p>
          {statements.doubtMobileUsage}
          <a 
            target="_blank" 
            rel="noopener" 
            href="https://www.youtube.com/watch?v=hR353K0JE24&feature=youtu.be">
            Clique
          </a>

        </p>}
      </div>

      <div className="toggle-content">
        <button onClick={() => setPrivacy(!privacy)} type="button">
        <span>VI.</span>
        <strong>Privacidade do Usuário</strong>
        <ArrowComponent />
        </button>
        {privacy && <p>{statements.userPrivacy}</p>}
      </div>

      <div className="toggle-content">
        <button onClick={() => setStatements(!stataments)} type="button">
        <span>VII.</span>
        <strong>Avisos contra tentativas de má indole</strong>
        <ArrowComponent />
        </button>
        {stataments && <p>{statements.userStatements}</p>}
      </div>
      </section>
     
      <div className="statements-content">
        <h1>Fique em casa</h1>
        <img src={girl} alt="heroes" />
      </div>

      <footer>
        Desenvolvido com ❤️ por M - © 2020
        <Link to='/home'>Ir para página inicial</Link>
      </footer>
    </div>
  );
}
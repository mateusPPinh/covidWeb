import React from 'react';
import { toast } from 'react-toastify'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiBookOpen } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import girl from '../../assets/girl.png';
import logo from '../../assets/logo.svg';

export default function Login() {''
  const [id, setId] = React.useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      toast.error('Ops, você tentou entrar sem o ID, ou seu ID está incorreto.')
    }
  }

  return (
    <div 
      className="logo-container" 
      style={{background:"#fff", 
      padding: 96, 
      borderRadius:8, 
      maxWidth: 1120,   
      boxSshadow: "0 0 100 rgba(0, 0, 0, 0.1)"
    }}>
      
      <section className="form">
        <img src={logo} alt='logo' />

        <form onSubmit={handleLogin}>
          <h1>Faça login</h1>
          <input 
            placeholder="Qual é seu ID?" 
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register" style={{color: "#333"}}>
            <FiLogIn size={16} color="#333" style={{marginRight: 8}} />
            Não tenho conta
          </Link>
          <Link className="back-link" to="/" style={{color: "#333"}}>
            <FiBookOpen size={16} color="#333" style={{marginRight: 8}} />
            Sobre - Termos de uso
          </Link>
        </form>
      </section>

      <img src={girl} alt="people" />
      </div>
  );
}

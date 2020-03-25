import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.svg';

export default function NewCase() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewCase(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (err) {
      toast.error('Erro ao cadastrar, tente novamente')
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
    <section>
      <img src={logo} alt='logo' />

      <h1>Cadastrar novo pedido de ajuda</h1>
      <p>Descreva seu caso de forma clara, seja verdadeiro, alguém sempre estará disposto a ajudar.</p>

      <Link className="back-link" to="/profile">
        <FiArrowLeft size={16} color="#333" style={{marginRight: 8}} />
        Voltar para a home
        </Link>
    </section>

    <form onSubmit={handleNewCase}>
      <input 
        placeholder="Título da sua história"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      <textarea 
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
      <input 
        placeholder="Valor que você precisa"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
      
      <button className="button">Cadastrar</button>
    </form>
     </div>
  </div>
  );
}

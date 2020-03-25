import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css';
import logo from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([])

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() =>  {
    api.get('profiles', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])

  async function handleDeleteCase(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      toast.error('Ocorreu algum erro ao deletar')
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="logo" />
        <span>Oi, {ongName}! 😃 Seja bem vindo(a)</span>

        <Link className="button" to='/incidents/new'>
          Cadastrar SOS
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#fafafa" />
        </button>
      </header>

      <h1>Casos já cadastrados por você</h1>

      <ul>
       {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASOS</strong>
            <p>{incident.title}</p>
    
            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>
    
            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR', 
            { style: 'currency', currency: 'BRL' })
            .format(incident.value)}
            </p>
    
            <button onClick={() => handleDeleteCase(incident.id)} type="button">
              <FiTrash2 size={20} color="#333" />
            </button>
          </li>
       ))}
      </ul>
    </div>
  );
}

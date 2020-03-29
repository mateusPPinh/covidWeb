import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api';
import logo from '../../assets/logo.svg';


export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [city, setCity] = React.useState('');
  const [uf, setUf] = React.useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      toast.success(`Cadastro realizado com sucesso, seu ID de acesso é ${response.data.id}`)

      history.push('/home');
    } catch (err) {
      toast.error('Ops, alguma coisa de errada, tente novamente.')
    }
  }

  return (
    <div className="register-container" >
      <div className="content">
      <section>
        <img src={logo} alt='logo' />

        <h1>Cadastro</h1>
        <p>Faça seu cadastro, e ajude pessoas nesse momento delicado pelo qual todos estamos passando</p>

        <Link className="back-link" to="/home">
          <FiArrowLeft size={16} color="#333" style={{marginRight: 8}} />
          Já tenho conta
          </Link>
      </section>

      <form onSubmit={handleRegister} >
        <input 
          placeholder="Seu nome completo" 
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Seu melhor email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          placeholder="Whatsapp e/ou telefone pra contato"
          value={whatsapp}
          required
          onChange={e => setWhatsapp(e.target.value)}
        />

        <div className="input-group">
          <input 
            placeholder="Cidade"
            value={city}
            required
            onChange={e => setCity(e.target.value)}
          />
          <input 
            placeholder="UF" 
            style={{ width: 80 }}
            value={uf}
            required
            onChange={e => setUf(e.target.value)}
          />
        </div>

        <button className="button">Cadastrar</button>
      </form>
       </div>
    </div>
  );
}
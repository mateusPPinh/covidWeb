import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Routes from './routes';
import GlobalStyle from './styles/globals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={8000}/>
    </BrowserRouter>
  )
}
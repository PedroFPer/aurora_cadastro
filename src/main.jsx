import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/headerStyle.css'

import TelaCadastro from './pages/RegistrationPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TelaCadastro/>
  </StrictMode>
)

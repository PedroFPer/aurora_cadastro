import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/headerStyle.css'
import './styles/footerStyle.css'
import './styles/mainRegistrationContainer.css'
import './styles/registrationPage.css'

import TelaCadastro from './pages/RegistrationPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TelaCadastro/>
  </StrictMode>
)

import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as buffer from 'buffer';
window.Buffer = buffer.Buffer;
window.global = window;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

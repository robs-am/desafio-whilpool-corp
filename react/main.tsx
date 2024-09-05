// react/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Usando alias para importar de 'react/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

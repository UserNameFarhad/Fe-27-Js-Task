import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NameContextProvider from './Context/NameContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NameContextProvider>
      <App />
    </NameContextProvider>
)

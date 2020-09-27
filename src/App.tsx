import React from 'react'

import './assets/styles/global.css'
import AuthProvider from './contexts'
import Routes from './routes'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App

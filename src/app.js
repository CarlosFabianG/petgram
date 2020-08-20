import React from 'react'
import { Logo } from './Components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'

export function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:id' />
      </Router>
    </>
  )
}

export default App

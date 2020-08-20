import React from 'react'
import { Logo } from './Components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './Components/NavBar'

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
      <NavBar />
    </>
  )
}

export default App

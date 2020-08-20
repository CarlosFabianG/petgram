import React from 'react'
import { Logo } from './Components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { NavBar } from './Components/NavBar'

import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              :
              <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </>
  )
}

export default App

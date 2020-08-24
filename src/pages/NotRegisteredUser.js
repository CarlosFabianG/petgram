import React from 'react'
import Context from '../context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)

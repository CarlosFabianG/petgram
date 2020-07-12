import React from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './Components/PhotoCard'

function App () {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </>
  )
}

export default App

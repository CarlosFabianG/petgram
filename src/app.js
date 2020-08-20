import React from 'react'
import { Logo } from './Components/Logo'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'

export function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <h1>Detail ID</h1>
          : <>
            <ListOfCategories />
            <ListOfPhotoCards />
          </>
      }
    </>
  )
}

export default App

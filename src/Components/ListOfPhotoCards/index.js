import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map(photocard => <li key={photocard}><PhotoCard /></li>)}
    </ul>
  )
}

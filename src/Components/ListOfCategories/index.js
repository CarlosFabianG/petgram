/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loader } from '../../styles/loader'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-carlosfabian-fqcunop4o.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    loading ? <List>{[1, 2, 3, 4, 5].map(category => <Item key={category}><Loader /></Item>)}</List>
      : <List fixed={fixed}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
      </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

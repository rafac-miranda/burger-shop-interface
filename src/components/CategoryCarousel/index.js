import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category2.png'
import api from '../../services/api'
import { CategoryImg, Container, ContainerItens, Image, Button } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt="category-logo" />

      <Carousel
        itemsToShow={5}
        style={{ width: '96%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="category-image" />
              <Button>{category.name}</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import CartImg from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import CardProducts from '../../components/CardProducts'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  HeaderConfig,
  ContainerRight,
  ContainerText,
  PageLink,
  Line,
  PageLinkExit,
  Input,
  Label,
  Nav,
  Ul,
  Li,
  A,
  ProductsContainer
} from './styles'

function Header() {
  const { logout, userData } = useUser()
  const { push } = useHistory()

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <HeaderConfig>
        <Input type="checkbox" id="bt_menu" />
        <Label
          style={{ marginRight: '50px', width: '30px' }}
          className="menu-click"
          htmlFor="bt_menu"
        >
          &#9776;
        </Label>
        <Nav className="menu">
          <Ul>
            <Li>
              <A href="#">Categorias</A>
              <Ul>
                {categories &&
                  categories.map(category => (
                    <Li
                      style={{ textTransform: 'uppercase', cursor: 'pointer' }}
                      type="button"
                      key={category.id}
                      isActiveCategory={activeCategory === category.id}
                    >
                      <A
                        onClick={() => {
                          setActiveCategory(category.id)
                        }}
                      >
                        {category.name}
                      </A>
                    </Li>
                  ))}
              </Ul>
            </Li>
          </Ul>
        </Nav>
        <ContainerRight>
          <Line></Line>
          <PageLink onClick={() => push('/carrinho')}>
            <img src={CartImg} alt="cart" />
          </PageLink>
          <Line></Line>
          <PageLink>
            <img src={Person} alt="user" />
          </PageLink>
          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
          </ContainerText>
        </ContainerRight>{' '}
      </HeaderConfig>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Header

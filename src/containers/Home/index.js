import LogoutIcon from '@mui/icons-material/Logout'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import Carrinho from '../../assets/compras.png'
import CardPizzas from '../../components/CardPizzas'
import CardProducts from '../../components/CardProducts'
import Header from '../../components/Header'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
  PizzasSelector
} from './styles'

function Home() {
  const { logout } = useUser()
  const { push } = useHistory()

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  /// //////////////////////////  CONT CART  /////////////////////////////////////////
  const [contFinal, setFinalCont] = useState(0)
  const { cartProducts } = useCart()

  useEffect(() => {
    const cont = cartProducts.reduce((acc, current) => {
      return current.quantity + acc
    }, 0)

    setFinalCont(cont)
  }, [cartProducts])

  /// ////////////////////////////////////////////////////////////////////

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
      <Header />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              style={{ textTransform: 'uppercase' }}
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
        <Link id="link" to="/carrinho">
          <div id="cart-and-cont">
            <img id="carrinho" src={Carrinho} />
            <button id="cont-cart">{contFinal}</button>
          </div>
        </Link>
        <div className="logout-link" onClick={logoutUser}>
          <p>SAIR</p>
          <LogoutIcon />
        </div>
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
      <PizzasSelector>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardPizzas key={product.id} product={product} />
          ))}
      </PizzasSelector>
    </Container>
  )
}

export default Home

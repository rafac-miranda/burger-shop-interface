import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import {
  Button,
  Container,
  Image,
  ProductDetails,
  ProductName,
  ProductPrice,
  SeletorPizzas
} from './styles'

function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  if (product.category_id === 14) {
    return (
      <Container>
        <SeletorPizzas>
          <p>Olá mundo!</p>
        </SeletorPizzas>
        <div id="img-btn">
          <Image src={product.url} alt="product-image" />
        </div>
        <div id="name-price-details">
          <ProductName style={{ textTransform: 'uppercase' }}>
            {product.name}
          </ProductName>
          <ProductDetails style={{ textTransform: 'uppercase' }}>
            {product.details}
          </ProductDetails>
          <ProductPrice>{product.formatedPrice}</ProductPrice>
          <Button id="btn-add" onClick={() => putProductInCart(product)}>
            Selecionar
          </Button>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <div id="img-btn">
          <Image src={product.url} alt="product-image" />
        </div>
        <div id="name-price-details">
          <ProductName style={{ textTransform: 'uppercase' }}>
            {product.name}
          </ProductName>
          <ProductDetails style={{ textTransform: 'uppercase' }}>
            {product.details}
          </ProductDetails>
          <ProductPrice>{product.formatedPrice}</ProductPrice>
          <Button id="btn-add" onClick={() => putProductInCart(product)}>
            Adicionar
          </Button>
        </div>
      </Container>
    )
  }
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}

import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { Container, SeletorPizzas, Label, Input, Button } from './styles'

function CardPizzas({ product }) {
  const { putProductInCart } = useCart()
  if (product.category_id === 14) {
    return (
      <Container>
        <SeletorPizzas>
          <Label>Sabor 1:</Label>
          <Input type="select" />
          <Label>Sabor 2:</Label>
          <Input type="select">Teste</Input>
          <Button onClick={() => putProductInCart(product)}>ADICIONAR</Button>
        </SeletorPizzas>
      </Container>
    )
  }
}

export default CardPizzas

CardPizzas.propTypes = {
  product: PropTypes.object
}

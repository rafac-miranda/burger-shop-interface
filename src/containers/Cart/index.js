import React from 'react'

import CartItens from '../../components/CartItens'
import CartResume from '../../components/CartResume'
import { Container, Wrapper } from './styles'

function Cart() {
  return (
    <Container>
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}

export default Cart

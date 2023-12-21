import React from 'react'
import { Link } from 'react-router-dom'

import CarrinhoVazio from '../../assets/carrinho-vazio.png'
import Button from '../../components/Button'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

function CartItens() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container>
        <Header>
          <p>#</p>
          <p>Itens</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
        </Header>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map(product => (
            <Body key={product.id}>
              <img src={product.url} />
              <p style={{ textTransform: 'uppercase' }}>{product.name}</p>
              <p>{formatCurrency(product.price)}</p>
              <div className="quantity-container">
                <button
                  id="subtrair"
                  onClick={() => decreaseProducts(product.id)}
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  id="adicionar"
                  onClick={() => increaseProducts(product.id)}
                >
                  +
                </button>
              </div>
              <p>{formatCurrency(product.quantity * product.price)}</p>
            </Body>
          ))
        ) : (
          <EmptyCart>
            <img src={CarrinhoVazio} />
            Carrinho vazio
          </EmptyCart>
        )}
      </Container>
      <Link style={{ textDecoration: 'none' }} to="/">
        <Button style={{ marginTop: '20px', textTransform: 'uppercase' }}>
          Voltar
        </Button>
      </Link>
    </div>
  )
}

export default CartItens

import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'itens itens-price'
      'delivery-tax delivery-tax-price';
    .title {
      grid-area: title;
      margin-bottom: 20px;
      border-bottom: 1px solid #000;
      padding-bottom: 10px;
      text-align: center;
    }
    .itens {
      grid-area: itens;
    }
    .itens-price {
      grid-area: itens-price;
    }
    .delivery-tax {
      grid-area: delivery-tax;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 500;
    margin-top: 50px;
    border-top: 1px solid #000;
    padding-top: 10px;
  }
`

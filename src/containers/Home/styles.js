import styled from 'styled-components'

import HomeBg from '../../assets/home-bg.png'

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    background: url('${HomeBg}');
    margin-top: -20px;
    #cart-and-cont {
      position: fixed;
      display: flex;
      flex-direction: row;
      margin-top: -28px;
      gap: 10px;
    }
    #carrinho {
      width: 50px;
      cursor: pointer;
      margin-left: 40px;
    }
    #cont-cart {
      position: fixed;
      border: none;
      background: red;
      color: white;
      font-weight: bold;
      font-size: 18px;
      border-radius: 50%;
      width: 20px;
      margin-left: 80px;
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    background: url('${HomeBg}');
    #carrinho {
      width: 50px;
      cursor: pointer;
      position: fixed;
    }
    #cont-cart {
      position: fixed;
      border: none;
      background: red;
      color: white;
      font-weight: bold;
      font-size: 18px;
      border-radius: 50%;
      width: 20px;
      display: none;
    }
  }
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;

  color: #9758a6;
`

export const CategoriesMenu = styled.div`
  @media only screen and (min-width: 768px) {
    position: fixed;
    display: flex;
    flex-flow: row;
    justify-content: first baseline;
    align-items: last baseline;
    gap: 15px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    width: 100%;
    margin-top: -5px;
    height: 60px;

    .logout-link {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffff;
      gap: 5px;
      position: fixed;
      margin-left: 93%;
      cursor: pointer;

      p {
        font-size: 12px;
      }
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 50px;
    gap: 0px 5px;
    width: 100%;
    display: none;
  }
`

export const CategoryButton = styled.button`
  @media only screen and (min-width: 768px) {
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props =>
      props.isActiveCategory && '2px solid rgba(151, 88, 166, 0.9)'};
    color: ${props => (props.isActiveCategory ? '#9758a6' : '#fff')};
    font-size: 13px;
    line-height: 20px;
    font-weight: bold;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 760px) {
    display: none;
    margin-top: 9px;
    height: 60px;
    font-weight: bold;
    font-style: normal;
    border-radius: 8px;
    border: none;
    color: ${props =>
      props.isActiveCategory ? 'rgba(151, 88, 166, 0.9)' : '#fff'};
    background: ${props =>
      props.isActiveCategory ? '#fff' : 'rgba(151, 88, 166, 0.7)'};
  }
`

export const ProductsContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px;
    justify-items: center;
    margin-top: 20px;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    padding: 10px;
    justify-items: center;
    margin-left: -70px;
    display: none;
  }
`

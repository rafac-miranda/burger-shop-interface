import styled from 'styled-components'

import HomeBg from '../../assets/home-bg.png'

export const Container = styled.div`
  @media only screen and (min-width: 701px) {
    display: none;
  }
  ///////////////////////////////////////////////////////////
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
    }
  }
`
export const ProductsContainer = styled.div`
  @media only screen and (min-width: 701px) {
    display: none;
  }
  ///////////////////////////////////////////////////////////
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    padding: 10px;
    justify-items: center;
    margin-left: -70px;
  }
`

export const HeaderConfig = styled.div`
  @media only screen and (min-width: 701px) {
    .menu {
      display: none;
    }
    #bt_menu {
      display: none;
    }
    .menu-click {
      display: none;
    }
    p {
      display: none;
    }
    img {
      display: none;
    }
  }
  /////////////////////////////////////////////////////////
  @media only screen and (max-width: 700px) {
    height: 72px;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    .menu {
      width: 30%;
      height: 50px;
    }

    /*Estilizando as listas */
    .menu ul {
      list-style: none;
      position: relative;
      width: 130px;
      margin-left: -30px;
    }

    .menu ul li {
      width: 150px;
      float: left;
    }

    .menu a {
      padding: 15px;
      display: block;
      text-decoration: none;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.7);
      color: #000;
      font-weight: bold;
    }

    .menu ul ul {
      position: absolute;
      visibility: hidden;
    }

    .menu ul li:hover ul {
      visibility: visible;
    }

    .menu a:hover {
      background-color: rgba(151, 88, 166, 0.9);
      color: #fff;
    }

    .menu ul ul li {
      float: none;
      border-bottom: solid 1px #ccc;
    }

    .menu ul ul li a {
      background-color: rgba(151, 88, 166, 0.9);
    }

    /*Criando o label */
    label[for='”bt_menu”'] {
      padding: 5px;
      background-color: #ffff;
      color: #fff;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
      height: 50px;
    }
    .menu-click {
      height: 60px;
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
    }

    #bt_menu {
      display: none;
    }

    label[for='”bt_menu”'] {
      display: none;
    }

    /*Deixando o Menu Responsivo */ /////////////////////////////////////////////////////

    label[for='”bt_menu”'] {
      display: block;
    }

    #bt_menu:checked ~ .menu {
      margin-left: 0;
    }

    .menu {
      margin-left: -100%;
      transition: all 0.4s;
    }

    .menu ul li {
      width: 100%;
      float: none;
    }

    .menu ul ul {
      position: static;
      overflow: hidden;
      max-height: 0;
      transition: all 4s;
    }

    .menu ul li:hover ul {
      height: auto;
      max-height: 700px;
    }
  }
  @media only screen and (max-width: 400px) {
    height: 72px;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    .menu {
      width: 35%;
      height: 50px;
    }

    /*Estilizando as listas */
    .menu ul {
      list-style: none;
      position: relative;
      width: 130px;
      margin-left: -40px;
    }

    .menu ul li {
      width: 150px;
      float: left;
    }

    .menu a {
      padding: 15px;
      display: block;
      text-decoration: none;
      text-align: center;
      background-color: rgba(151, 88, 166, 0.9);
      color: #000;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 5px;
    }

    .menu ul ul {
      position: absolute;
      visibility: hidden;
    }

    .menu ul li:hover ul {
      visibility: visible;
    }

    .menu a:hover {
      background-color: rgba(151, 88, 166, 0.9);
      color: #fff;
    }

    .menu ul ul li {
      float: none;
      border-bottom: solid 1px #ccc;
    }

    .menu ul ul li a {
      background-color: rgba(151, 88, 166, 0.9);
    }

    /*Criando o label */
    label[for='”bt_menu”'] {
      padding: 5px;
      background-color: #222;
      color: #fff;
      font-family: Arial;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
      height: 50px;
    }
    .menu-click {
      height: 60px;
      font-size: 40px;
      font-weight: bold;
    }

    #bt_menu {
      display: none;
    }

    label[for='”bt_menu”'] {
      display: none;
    }

    /*Deixando o Menu Responsivo */ /////////////////////////////////////////////////////

    label[for='”bt_menu”'] {
      display: block;
    }

    #bt_menu:checked ~ .menu {
      margin-left: 0;
    }

    .menu {
      margin-left: -100%;
      transition: all 0.4s;
    }

    .menu ul li {
      width: 100%;
      float: none;
    }

    .menu ul ul {
      position: static;
      overflow: hidden;
      max-height: 0;
      transition: all 4s;
    }

    .menu ul li:hover ul {
      height: auto;
      max-height: 700px;
    }
  }
`

export const ContainerLeft = styled.div`
  @media only screen and (max-width: 700px) {
    display: flex;
    gap: 30px;
  }
`

export const PageLink = styled.a`
  @media only screen and (max-width: 700px) {
    cursor: pointer;
    text-decoration: none;
    color: #555555;
    font-size: 16px;
    line-height: 19px;
  }
`

export const ContainerRight = styled.div`
  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    gap: 20px;

    #cont-cart {
      position: fixed;
      border: none;
      background: red;
      color: white;
      font-weight: bold;
      font-size: 18px;
      border-radius: 50%;
      width: 20px;
    }
  }
`

export const Line = styled.div`
  @media only screen and (max-width: 700px) {
    height: 40px;
    border-right: 0.5px solid #bababa;
  }
`

export const ContainerText = styled.div`
  @media only screen and (max-width: 700px) {
    p {
      font-style: normal;
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;

      color: #ffffff;
    }
  }
`

export const PageLinkExit = styled.a`
  @media only screen and (max-width: 700px) {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    color: #9758a6;
  }
`
export const Input = styled.input``
export const Label = styled.label``
export const Nav = styled.div``
export const Ul = styled.ul``
export const Li = styled.li``
export const A = styled.a``

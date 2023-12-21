import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: center;
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    padding: 10px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    p {
      text-align: center;
    }
  }
`

export const Header = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #000;
    p {
      font-size: 16px;
      color: #000;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    width: 102%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;
    p {
      font-size: 16px;
      color: #b5b5b5;
    }
  }
`

export const Body = styled.div`
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 600px;
    grid-gap: 10px 15px;
    padding: 10px;

    img {
      width: 120px;
      border-radius: 10px;
    }
    p {
      font-size: 16px;
      color: #000000;
    }
    .quantity-container {
      display: flex;
      gap: 20px;
      #adicionar {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 25px;
        background: green;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #fff;
      }
      #subtrair {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 30px;
        background: red;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #fff;
      }
      p {
        margin-top: 5px;
      }
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: max-content;
    padding: 5px;
    width: 400px;

    img {
      width: 60px;
      border-radius: 10px;
    }
    p {
      font-size: 15px;
      color: #000000;
      padding-left: 3px;
      padding-right: 5px;
      margin-top: 5px;
    }
    .quantity-container {
      margin-left: 8px;
      gap: 0px;
      display: flex;
      #adicionar {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 10px;
        background: green;
        border: none;
        font-size: 13px;
        cursor: pointer;
        color: #fff;
      }
      #subtrair {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 10px;
        background: red;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #fff;
      }
    }
  }
  ///////////////////// M O B I L E (MUITO PEQUENO)///////////////////////
  @media only screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: max-content;
    padding: 5px;
    width: 350px;

    img {
      width: 60px;
      border-radius: 10px;
    }
    p {
      font-size: 14px;
      color: #000000;
      padding-left: 3px;
      padding-right: 5px;
      margin-top: 5px;
    }
    .quantity-container {
      margin-left: 8px;
      gap: 0px;
      display: flex;
      #adicionar {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 10px;
        background: green;
        border: none;
        font-size: 13px;
        cursor: pointer;
        color: #fff;
      }
      #subtrair {
        display: flex;
        align-items: center;
        padding: 15px;
        border-radius: 50px;
        height: 10px;
        background: red;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #fff;
      }
    }
  }
`

export const EmptyCart = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  img {
    width: 100px;
    margin-bottom: 10px;
  }
`

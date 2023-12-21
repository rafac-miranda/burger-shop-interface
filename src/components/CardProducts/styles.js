import styled from 'styled-components'

export const Button = styled.button`
  @media only screen and (min-width: 768px) {
    width: 260px;
    height: 38.32px;
    background: rgba(151, 88, 166, 0.9);

    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    width: 170px;
    height: 38.32px;
    background: rgba(151, 88, 166, 0.7);

    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.9);
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    padding: 16px;
    width: 600px;
    height: 330px;
    #sobre-buttons {
      background: transparent;
    }
    #contador {
      position: fixed;
    }

    #name-price-details {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding-left: 10px;
    }
    button {
      margin-top: -1px;
    }
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.9);
    border-radius: 30px;
    display: flex;
    padding: 16px;
    margin-left: 67px;
    justify-content: center;
    width: 365px;
    height: 250px;
    #img-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: last baseline;
    }
    #name-price-details {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 5px;
    }
  }
`

export const Image = styled.img`
  @media only screen and (min-width: 768px) {
    width: 300px;
    border-radius: 10px;
    margin-bottom: -1px;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    width: 170px;
    border-radius: 10px 10px 0px 0px;
    margin-bottom: -1px;
  }
`

export const ProductName = styled.p`
  @media only screen and (min-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 19px;
    color: #fff;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
  }
`

export const ProductDetails = styled.i`
  font-weight: 500;
  text-align: justify;
  color: #fff;
`

export const ProductPrice = styled.p`
  @media only screen and (min-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 21px;

    color: #fff;
    margin-top: 80px;
  }
  ///////////////////// M O B I L E ///////////////////////
  @media only screen and (max-width: 700px) {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 21px;

    color: #fff;
    margin-top: 30px;
  }
`

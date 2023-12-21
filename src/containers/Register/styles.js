import styled from 'styled-components'

import LoginBg from '../../assets/home-bg.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${LoginBg}');
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
`

export const ContainerItens = styled.div`
  padding: 20px 30px 30px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;

  img {
    width: 210px;
    box-shadow: 0px 2px 10px 10px rgba(151, 88, 166, 0.9);
    border-radius: 25px;
    border: 5px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: underline;
    font-style: italic;
    color: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: black !important;
    border: 1px solid rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #c0ed00;
  margin-top: 20px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 300px;
  height: 38.32px;
  background: rgba(153, 153, 153, 0.3);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);

  border-radius: 5px;
  ${props =>
    props.error
      ? 'border: 1px solid #cc1717;'
      : 'border: 1px solid rgba(0, 0, 0, 0.5);'}
  outline: none;
  font-size: 18px;
  padding: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #a1a1a1;
`

export const Button = styled.button`
  width: 300px;
  height: 38.32px;
  background: rgba(162, 194, 25, 0.7);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9);

  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SignInLink = styled.p`
  margin-top: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`

import styled from 'styled-components'

import Button from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 40px;
  }
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
  font-weight: bold;
  margin-top: 25px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  width: 100%;
  min-width: 280px;
  text-transform: uppercase;
  margin-bottom: 3px;
  padding-left: 8px;
  outline: none;
  font-weight: 500;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5x;
  padding: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 33px;
  color: #ffffff;
`
export const ContainerItens = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 14px;
    cursor: pointer;
  }
`

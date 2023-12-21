import styled from 'styled-components'

import Bg from '../../assets/home-bg.png'
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: url('${Bg}');
  justify-content: flex-start;
`
export const ContainerItens = styled.div`
  padding: 20px;
  width: 100%;
  background: url('${Bg}');
`

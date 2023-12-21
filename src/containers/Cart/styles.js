import styled from 'styled-components'

import Bg from '../../assets/home-bg.png'

export const Container = styled.div`
  background: url('${Bg}');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding-top: 40px;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 701px) {
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;
  }
`

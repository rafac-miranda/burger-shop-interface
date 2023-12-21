import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 80px 20px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 20px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  color: #ffffff;

  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
`

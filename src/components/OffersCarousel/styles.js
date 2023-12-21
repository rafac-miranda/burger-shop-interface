import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const OfferImg = styled.img`
  width: 1367px;
  box-shadow: 10px -70px 20px rgba(0, 0, 0, 0.9);
  margin-bottom: 50px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 17px;

    color: #fff;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 170px;
  border-radius: 15px;
  box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.9);
  margin-bottom: 16px;
`

export const Button = styled.button`
  margin-top: 16px;

  box-shadow: 7px -4px 5px rgba(0, 0, 0, 0.9);
  background: rgba(151, 88, 166, 0.7);
  border-radius: 8px;
  border: none;
  height: 50px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffff;
  cursor: pointer;
`

import styled from 'styled-components'
import { Container } from '../../Layout/Layout.common'

export const Background = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #607d8b;
`

export const Content = styled.div`
  position: relative;
`

export const Cup = styled.div`
  position: relative;
  width: 140px;
  height: 150px;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
`

export const CupTop = styled.div`
  position: absolute;
  top: -15px;
  left: 0;

  width: 100%;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
`

export const CupInside = styled.div`
  position: absolute;
  top: 3px;
  left: 5px;

  width: calc(100% - 10px);
  height: 25px;
  border-radius: 50%;
  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  overflow: hidden;
`

export const Coffee = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(to right, #c57265, #e28462);
`

export const CupHandle = styled.div`
  position: absolute;
  top: 15px;
  right: -30px;
  width: 80px;
  height: 90px;
  border: 15px solid #d9d9d9;
  border-left: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-radius: 50%;

  transform: rotate(40deg);
`

export const Plate = styled.div`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);

  width: 250px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);

  :before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }
  :after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    background: radial-gradient(rgba(0, 0, 0, 0.2) 25%, transparent, transparent);
  }
`

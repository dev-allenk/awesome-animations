import styled from 'styled-components'
import { Container } from '../../Layout/Layout.common'

export const Background = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #607d8b;
`

export const Cup = styled.div`
  position: relative;
  width: 140px;
  height: 150px;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;

    width: 100%;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  }

  &:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 5px;

    width: calc(100% - 10px);
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  }
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

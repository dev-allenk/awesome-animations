import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;

  width: 100vw;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: calc(9 / 16 * 100%);
  border: 1px solid #ddd;
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

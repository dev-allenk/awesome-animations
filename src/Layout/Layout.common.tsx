import styled from "styled-components";

export const Layout = styled.div`
  display: grid;

  width: 100vw;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Container = styled.div`
  padding-top: calc(9 / 16 * 100%);
  border: 1px solid #ddd;
`;

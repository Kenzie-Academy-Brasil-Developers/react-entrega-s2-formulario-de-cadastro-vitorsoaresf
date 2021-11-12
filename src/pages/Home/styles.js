import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  width: 100vw;
  section {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    section {
      display: block;
      background-color: blue;
      height: 100vh;
      width: 400px;
    }
  }
`;

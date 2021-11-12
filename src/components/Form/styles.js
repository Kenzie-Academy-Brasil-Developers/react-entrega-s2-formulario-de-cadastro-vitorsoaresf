import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 300px;
  height: 600px;
  border: solid 1px #fda7df;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 0.5em gray;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;

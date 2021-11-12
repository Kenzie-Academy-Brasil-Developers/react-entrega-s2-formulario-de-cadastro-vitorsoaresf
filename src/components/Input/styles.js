import styled from "styled-components";

export const ContainerInput = styled.input`
  border-radius: 5px;
  border: solid 1px #fda7df;
  background-color: unset;
  height: 50px;
  width: 200px;
  font-size: 1rem;
  margin-top: 20px;
  color: white;

  ::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline-color: white;
  }
`;

export const Container = styled.div`
  color: red;

  p {
    height: 10px;
    font-size: 0.6rem;
  }
`;

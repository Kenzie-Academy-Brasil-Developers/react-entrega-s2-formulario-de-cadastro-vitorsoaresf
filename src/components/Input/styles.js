import styled from "styled-components";

export const ContainerInput = styled.input`
  border-radius: 5px;
  border: solid 1px #fda7df;
  background-color: unset;
  height: 50px;
  width: 200px;
  margin: 20px 0;
  font-size: 1rem;
  color: white;

  ::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline-color: white;
  }
`;

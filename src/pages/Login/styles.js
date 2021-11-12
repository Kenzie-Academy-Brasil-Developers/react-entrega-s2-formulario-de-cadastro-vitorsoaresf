import styled from "styled-components";
import img from "../../assets/background_flowers.jpg";

export const ContainerLogin = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    height: 500px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    transform: rotate(45deg);
    border-radius: 10px;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 4.5rem;
    position: absolute;
    margin-bottom: 200px;
  }

  p {
    font-family: "Dancing Script", cursive;
    font-size: 5rem;
    position: absolute;
    margin-bottom: 100px;
  }
  button {
    height: 50px;
    width: 210px;
    border-radius: 5px;
    border: none;
    background-color: #f78fb3;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    transition: background-color 1s;
    margin-top: 200px;

    :hover {
      background-color: #c67590;
      color: white;
    }
  }
`;

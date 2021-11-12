import Button from "../../components/Button";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { ContainerLogin } from "./styles";

function Login() {
  const history = useHistory();
  const { name } = useParams();

  return (
    <ContainerLogin>
      <div></div>
      <h1>Bem vindo(a)!</h1>
      <p>{name.split(" ")[0]}</p>
      <button value="VOLTAR" onClick={() => history.push("/")}>
        Back to Home
      </button>
    </ContainerLogin>
  );
}

export default Login;

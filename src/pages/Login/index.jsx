import Button from "../../components/Button";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

function Login() {
  const history = useHistory();
  const { name } = useParams();

  return (
    <>
      <div>Login: {name} </div>;
      <Button value="VOLTAR" onClick={() => history.push("/")} />
    </>
  );
}

export default Login;

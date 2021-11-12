import Button from "../../components/Button";
import { useHistory } from "react-router";
function Login() {
  const history = useHistory();

  return (
    <>
      <div>Login</div>;
      <Button value="VOLTAR" onClick={() => history.push("/")} />
    </>
  );
}

export default Login;

import { ContainerRoutes } from "./styles";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routes() {
  return (
    <ContainerRoutes>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login/:name">
          <Login />
        </Route>
      </Switch>
    </ContainerRoutes>
  );
}

export default Routes;

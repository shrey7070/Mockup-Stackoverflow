import { Redirect, Route, Router, Switch } from "react-router-dom";
import { history } from "./helper/history";

import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login/Login";
import Questions from "./pages/Questions/Questions";

// Reload the page and route back to Login page if email is deleted from localStorage
window.addEventListener("storage", function (e) {
  if (localStorage.getItem("email") === null) {
    this.location.reload(true);
  }
});

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* <PrivateRoute to="/profile" component={Login} /> */}
        <PrivateRoute path="/questions" component={Questions} />
        <Route exact path="/" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;

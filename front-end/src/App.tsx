import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useMemo } from "react";
import "./App.css";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "components/NotFound";
import Layout from "components/Layout";
import Login from "pages/Login";

function App() {
  let jwt = localStorage.getItem("jwt") || sessionStorage.getItem("jwt");
  const list = useMemo(() => routes.map((e) => e.path), []);

  return (
    <Router>
      <Switch>
        {/* {jwt ? <Redirect to="/home" /> : <Redirect to="/login" />} */}
        <Route exact path={list}>
          <Layout route={routes}></Layout>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <ToastContainer></ToastContainer>
    </Router>
  );
}

export default App;

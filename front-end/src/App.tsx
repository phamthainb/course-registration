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
import Loading from "components/Loading";
import { useSelector } from "react-redux";

function App() {
  let jwt = localStorage.getItem("jwt") || sessionStorage.getItem("jwt");
  const list = useMemo(() => routes.map((route) => route.path), []);
  // get loading
  const loading = useSelector((state: any) => state.app.loading);
  return (
    <Router>
      <Switch>
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
      <Loading active={loading} />
    </Router>
  );
}

export default App;

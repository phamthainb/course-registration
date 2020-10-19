import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import "./App.css";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "components/NotFound";
import Layout from "components/Layout";
import Login from "pages/Login";
import Loading from "components/Loading";
import { useSelector } from "react-redux";
import { apiToken } from "common/axiosService";
import * as constants from './pages/categories/constants';
import store from "./redux";
import { getUser } from "reducers/app";

function App() {
  console.log('app');
  
  let jwt = localStorage.getItem("jwt") || sessionStorage.getItem("jwt")
  useEffect(()=>{
    apiToken("GET", constants.GET_USER, null)
    .then(res => {
      store.dispatch(getUser(res.data));
    })
    .catch(err => {
      console.log(err);
    })
  })

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

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "components/NotFound";
import Layout from "components/Layout";
import Home from "pages/Home";
import Login from "pages/Login";

// {routes.}

function App() {
    return (
        <Router>
            <Switch>
                <Route path={routes.map(e => e.path)}>
                    <Layout route={routes}>
                    </Layout>
                </Route>
                <Route exact path="/login">
                    <Login></Login>
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

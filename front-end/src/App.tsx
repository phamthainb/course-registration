import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Footer from './components/Footer';
import routes from './routes';

function App() {

  const mapRoutes = routes.map((route, index)=>{
    return(
      <Route key={index} path={route.path} exact={route.exact}>
        {route.main}
      </Route>
    )
  })

  return (
    <Router>
      <Menu></Menu>
      <Switch>
        {mapRoutes}
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

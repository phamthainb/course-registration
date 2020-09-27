import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

export default function RouteProtect(route) {
  
//     useEffect(() => {
//     if (!localStorage.getItem("token")) return <Redirect to="/login" />;
//   }, []);

  return (
    <Route path={route.path} exact={route.exact}>
      {route.main}
    </Route>
  );
}

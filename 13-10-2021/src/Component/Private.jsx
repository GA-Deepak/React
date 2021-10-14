import React from "react";
import { Route, Redirect } from "react-router";
const Private = ({ children, ...props }) => {
  let token = false;
  token = localStorage.getItem("token") ? (token = true) : (token = false);

  return (
    <Route {...props} render={() => (token ? children : <Redirect to={"/"}/>)} />
  );
};

export default Private;

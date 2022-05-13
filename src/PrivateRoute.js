import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  auth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
}

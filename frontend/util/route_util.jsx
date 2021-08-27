import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/channels/@me" />
        }
    />
);

const Protected = ({ component: Component, loggedIn, user, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/login" />
        )
      }
    />
  );

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
    connect(mSTP, null)(Auth)
);

export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));
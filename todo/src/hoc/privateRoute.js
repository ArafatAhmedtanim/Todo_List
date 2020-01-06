import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('currUser') !== null ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/github/userName',
                    state: { from: props.location }
                }}
                />
            )
    )} />
);

export default PrivateRoute;
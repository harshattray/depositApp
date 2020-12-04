import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'

interface ProtectedRouteProps {
    comp: any,
    exact: any,
    path: string
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ comp: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if ((auth.isAuthenticated())) {
                return <Component />
            }
            else {
                return <Redirect to={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }} />
            }
        }} />
    )
}
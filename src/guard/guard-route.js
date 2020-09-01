import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function GuardRoute({component: C, appProps, ...rest}) {
    return (<Route
        {...rest}
        render={props =>
            appProps.isAuthenticated
                ? <C {...props} {...appProps} />
                : <Redirect
                    to={`/sign-in?redirect=${props.location.pathname}${props.location.search}`}
                />}
    />);
}
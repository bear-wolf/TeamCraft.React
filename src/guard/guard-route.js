import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function GuardRoute({component: C, appProps, ...rest}) {
    return (<Route
        {...rest}
        render={props => {
            console.log(appProps.isAuthenticated);
            return appProps.isAuthenticated
                ? <C {...props} {...appProps} />
                : <Redirect
                    to={`/sign-in?redirect=${props.location.pathname}${props.location.search}`}
                />
        }
        }
    />);
}